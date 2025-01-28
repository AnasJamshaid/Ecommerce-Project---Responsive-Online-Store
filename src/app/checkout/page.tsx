import Breadcrumb from "../components/Breadcrumb";
import CartSummary from "../components/CartSummary";
import CheckoutForm from "../components/CheckoutForm";
import { Footer } from "../components/Footer";
import Payment from "../components/Payment";
import SecondHeader from "../components/SecondHeader";


export default function CheckoutPage() {

    const pageTitle = "Checkout";
  return (
    <div className="main-container">
    <SecondHeader />
    <div className="relative text-white h-72 bg-cover bg-center" style={{ backgroundImage: "url('/page-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full space-y-4">
        <h1 className="text-4xl font-bold text-center font-helvetica">{pageTitle}</h1>
        <Breadcrumb />
      </div>
    </div>
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section: Checkout Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <CheckoutForm />
        </div>

        {/* Right Section: Cart Summary & Payment */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <CartSummary />
          <Payment />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
