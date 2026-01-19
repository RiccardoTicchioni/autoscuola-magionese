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

        // Try to save to database if Supabase is configured
        const supabase = await createClient();
        if (supabase) {
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
                // Continue to try email even if DB fails
            }
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
