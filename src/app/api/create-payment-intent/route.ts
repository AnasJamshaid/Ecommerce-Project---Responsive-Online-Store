import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, paymentMethodId } = body;

    if (!amount || typeof amount !== 'number') {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    if (!paymentMethodId) {
      return NextResponse.json({ error: 'Payment method ID is required' }, { status: 400 });
    }

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
    });

    // If the payment requires additional action (e.g., 3D Secure), return the client secret
    if (paymentIntent.status === 'requires_action') {
      return NextResponse.json(
        { clientSecret: paymentIntent.client_secret, requiresAction: true },
        { status: 200 }
      );
    }

    // If the payment is successful, return the client secret
    if (paymentIntent.status === 'succeeded') {
      return NextResponse.json(
        { clientSecret: paymentIntent.client_secret, success: true },
        { status: 200 }
      );
    }

    // Handle other cases
    return NextResponse.json({ error: 'Payment failed' }, { status: 400 });
  } catch (error: any) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}