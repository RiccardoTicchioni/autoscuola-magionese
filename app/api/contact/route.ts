import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, gdprConsent, honeypot } = body;

        // Honeypot check for spam
        if (honeypot) {
            return NextResponse.json({ success: true }); // Fake success for bots
        }

        // Validation
        if (!name || !email || !message || !gdprConsent) {
            return NextResponse.json(
                { error: 'Campi obbligatori mancanti' },
                { status: 400 }
            );
        }

        // Get client IP
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

        // Save to database
        const supabase = await createClient();
        const { error } = await supabase
            .from('contact_submissions')
            .insert({
                name,
                email,
                phone: phone || null,
                subject: subject || null,
                message,
                gdpr_consent: gdprConsent,
                honeypot: null,
                ip_address: ip,
            });

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Errore nel salvataggio del messaggio' },
                { status: 500 }
            );
        }

        // TODO: Send email notification via Resend
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'noreply@autoscuolamagionese.it',
        //   to: 'info@autoscuolamagionese.it',
        //   subject: `Nuovo contatto: ${subject || 'Richiesta informazioni'}`,
        //   html: `...`
        // });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Errore interno del server' },
            { status: 500 }
        );
    }
}
