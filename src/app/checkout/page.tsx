'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useEffect, useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
    const [cart, setCart] = useState<Cart>({});
    const [loading, setLoading] = useState(true);
    const [discount] = useState(0);
    const shippingCharge = 5.99;

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) setCart(JSON.parse(savedCart));
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (Object.keys(cart).length === 0) return <div>Cart is empty</div>;

    const totalAmount = Object.values(cart).reduce(
        (acc, { product, quantity }) => acc + product.price * quantity,
        0
    );

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm
                cart={cart}
                totalAmount={totalAmount}
                discount={discount}
                shippingCharge={shippingCharge}
            />
        </Elements>
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

