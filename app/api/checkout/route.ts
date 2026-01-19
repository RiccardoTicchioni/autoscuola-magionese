import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
    // Check if required services are configured
    if (!process.env.STRIPE_SECRET_KEY) {
        return NextResponse.json(
            { error: 'Servizio pagamenti non disponibile' },
            { status: 503 }
        );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        const supabase = await createClient();

        // Check if Supabase is configured
        if (!supabase) {
            return NextResponse.json(
                { error: 'Servizio non disponibile' },
                { status: 503 }
            );
        }

        // Check if user is authenticated
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return NextResponse.json(
                { error: 'Non autenticato' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { serviceId, branchId } = body;

        if (!serviceId || !branchId) {
            return NextResponse.json(
                { error: 'Dati mancanti' },
                { status: 400 }
            );
        }

        // Get service details
        const { data: service, error: serviceError } = await supabase
            .from('services')
            .select('*')
            .eq('id', serviceId)
            .single();

        if (serviceError || !service) {
            return NextResponse.json(
                { error: 'Servizio non trovato' },
                { status: 404 }
            );
        }

        // Get user profile
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', user.id)
            .single();

        if (profileError || !profile) {
            return NextResponse.json(
                { error: 'Profilo non trovato' },
                { status: 404 }
            );
        }

        // Create enrollment record
        const { data: enrollment, error: enrollmentError } = await supabase
            .from('enrollments')
            .insert({
                user_id: profile.id,
                service_id: serviceId,
                branch_id: branchId,
                status: 'pending',
            })
            .select()
            .single();

        if (enrollmentError) {
            console.error('Enrollment error:', enrollmentError);
            return NextResponse.json(
                { error: 'Errore nella creazione dell\'iscrizione' },
                { status: 500 }
            );
        }

        // Create Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email: user.email,
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: service.name,
                            description: service.short_description || undefined,
                        },
                        unit_amount: Math.round(service.base_price * 100), // Convert to cents
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                enrollment_id: enrollment.id,
                user_id: user.id,
                service_id: serviceId,
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/iscrizione/successo?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/iscrizione?cancelled=true`,
        });

        // Update enrollment with Stripe session ID
        await supabase
            .from('enrollments')
            .update({ stripe_session_id: session.id })
            .eq('id', enrollment.id);

        return NextResponse.json({
            sessionId: session.id,
            url: session.url,
        });
    } catch (error) {
        console.error('Checkout creation error:', error);
        return NextResponse.json(
            { error: 'Errore interno del server' },
            { status: 500 }
        );
    }
}
