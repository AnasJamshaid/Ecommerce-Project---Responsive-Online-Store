import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the correct API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15', // Use the stable API version
});

export async function POST(request: Request) {
  try {
    const { amount, paymentMethodId } = await request.json();
    console.log('Received request with:', { amount, paymentMethodId });

    // Validate the amount
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Invalid amount');
    }

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });

    console.log('PaymentIntent created:', paymentIntent.id);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Error creating PaymentIntent:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create PaymentIntent' },
      { status: 500 }
    );
  }
}