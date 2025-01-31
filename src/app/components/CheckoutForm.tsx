'use client';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';
import { Footer } from './Footer';
import SecondHeader from './SecondHeader';
import Breadcrumb from './Breadcrumb';

interface CheckoutFormProps {
  cart: { [key: string]: { product: any; quantity: number } };
  totalAmount: number;
  discount: number;
  shippingCharge: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cart, totalAmount, discount, shippingCharge }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const finalTotal = totalAmount + shippingCharge - discount;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setLoading(false);
      return;
    }

    // Step 1: Create a PaymentMethod
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.name,
        email: formData.email,
        address: {
          line1: formData.address,
          city: formData.city,
          postal_code: formData.zip,
        },
      },
    });

    if (paymentMethodError) {
      setError(paymentMethodError.message || 'An error occurred');
      setLoading(false);
      return;
    }

    try {
      const amountInCents = Math.round(finalTotal * 100); // Convert to cents

      // Step 2: Call your API to create a PaymentIntent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInCents,
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('API Error:', errorResponse);
        throw new Error(errorResponse.error || 'Failed to create PaymentIntent');
      }

      const { clientSecret, requiresAction } = await response.json();

      // Step 3: Confirm the PaymentIntent
      if (requiresAction) {
        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret);
        if (confirmError) {
          setError(confirmError.message || 'An error occurred during payment confirmation');
          setLoading(false);
          return;
        }
      }

      // Payment successful
      toast.success('Payment successful!');
      router.push('/success'); // Redirect to the success page
    } catch (err: any) {
      setError(err.message || 'Failed to process payment');
    } finally {
      setLoading(false);
    }
  };
  return (

    <div className="main-container">
      <SecondHeader />
      <div className="relative text-white h-72 bg-cover bg-center" style={{ backgroundImage: "url('/page-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center font-helvetica">Check Out</h1>
          <Breadcrumb />
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Checkout Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <CardElement
                        options={{
                          style: {
                            base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                color: '#aab7c4',
                              },
                            },
                            invalid: {
                              color: '#9e2146',
                            },
                          },
                        }}
                        className="p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !stripe}
                    className="w-full bg-[#FF9F0D] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#FF8F0D] transition-colors duration-300 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : `Pay $${finalTotal.toFixed(2)}`}
                  </button>

                  {error && <div className="text-red-500 mt-4">{error}</div>}
                </form>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-6">
                  {Object.values(cart).map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={product.image || '/default-food.jpg'}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="bg-gray-100"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">
                          {quantity} × ${product.price}
                        </p>
                      </div>
                      <span className="font-medium text-gray-900">
                        ${(quantity * parseFloat(product.price)).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shippingCharge.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold pt-4">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CheckoutForm;