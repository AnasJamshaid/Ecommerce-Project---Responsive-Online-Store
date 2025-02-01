'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { Footer } from '../components/Footer';
import SecondHeader from '../components/SecondHeader';
import Breadcrumb from '../components/Breadcrumb';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
    const [cart, setCart] = useState<Cart>({});
    const [loading, setLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [discount] = useState(0);
    const shippingCharge = 5.99;

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) setCart(JSON.parse(savedCart));
        setLoading(false);
    }, []);

    useEffect(() => {
        if (Object.keys(cart).length > 0) {
            const totalAmount = Object.values(cart).reduce(
                (acc, { product, quantity }) => acc + product.price * quantity,
                0
            );
            const finalTotal = totalAmount + shippingCharge - discount;

            fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: Math.round(finalTotal * 100), // Convert to cents
                }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret))
                .catch((error) => console.error('Error creating PaymentIntent:', error));
        }
    }, [cart, discount, shippingCharge]);

    if (loading) {
        return (
            <div className="flex flex-col space-y-4 p-4">
                <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-12 bg-gray-200 animate-pulse rounded"></div>
            </div>
        );
    }

    if (Object.keys(cart).length === 0) return <div>Cart is empty</div>;

    return (
        <>
            <div className='main-container'>
                <SecondHeader />
                <div
                    className="relative text-white h-72 bg-cover bg-center"
                    style={{ backgroundImage: "url('/page-bg.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative flex flex-col items-center justify-center h-full space-y-4">
                        <h1 className="text-4xl font-bold text-center font-helvetica">
                            Check Out
                        </h1>
                        <Breadcrumb />
                    </div>
                </div>

                {/* Show skeleton loader only for the Stripe Elements */}
                {clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm
                            cart={cart}
                            totalAmount={Object.values(cart).reduce(
                                (acc, { product, quantity }) => acc + product.price * quantity,
                                0
                            )}
                            discount={discount}
                            shippingCharge={shippingCharge}
                            tax={5}
                        />
                    </Elements>
                ) : (
                    <div className="flex flex-col space-y-4 p-4">
                        <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
                        <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
                        <div className="h-12 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                )}
          
            </div>
            
        </>
    );
}

interface Cart {
    [key: string]: { product: Product; quantity: number };
}

interface Product {
    id: string;
    name: string;
    price: number;
    image?: string;
}
