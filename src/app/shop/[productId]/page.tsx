import Breadcrumb from "@/app/components/Breadcrumb";
import { Footer } from "@/app/components/Footer";
import SecondHeader from "@/app/components/SecondHeader";

interface Product {
  id: number;
  title: string;
  price: string;
  salePrice?: string; // Optional sale price
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
}

async function fetchProduct(productId: string): Promise<Product | null> {
  const res = await fetch("http://localhost:3000/api/products"); // Update the URL
  const products = await res.json();
  return (
    products.find((product: Product) => product.id === parseInt(productId)) ||
    null
  );
}
export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await fetchProduct(params.productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="main-container">
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center">Shop Details</h1>
          <Breadcrumb />
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto py-12 px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduce the gap here */}
    {/* Gallery Section */}
    <div className="col-span-1 flex flex-col space-y-2">
      {product.gallery.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${product.title} gallery ${index + 1}`}
          className="w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
        />
      ))}
    </div>

    {/* Main Image Section */}
    <div className="col-span-1 flex justify-center items-center">
      <img
        src={product.image} // Main product image
        alt={product.title}
        className="rounded-lg shadow-lg w-full max-w-md h-auto"
      />
    </div>

    {/* Product Info Section */}
    <div className="col-span-1 space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">{product.title}</h2>

      {/* Pricing Section */}
      <div className="flex items-center space-x-4">
        {product.salePrice ? (
          <>
            <p className="text-[#FF9F0D] font-bold text-xl">
              ${product.salePrice}
            </p>
            <p className="text-gray-500 line-through text-xl">
              ${product.price}
            </p>
          </>
        ) : (
          <p className="text-[#FF9F0D] font-bold text-xl">
            ${product.price}
          </p>
        )}
      </div>

      {/* Rating Section */}
      <div className="flex items-center space-x-2">
        <div className="text-yellow-500 flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < product.rating ? "★" : "☆"}</span>
          ))}
        </div>
        <p className="text-gray-500 text-sm">{product.reviews} reviews</p>
      </div>

      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        diam pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
          Add to Cart
        </button>
        <button className="border border-gray-300 py-2 px-6 rounded-lg hover:bg-gray-100 transition">
          Add to Wishlist
        </button>
        <button className="border border-gray-300 py-2 px-6 rounded-lg hover:bg-gray-100 transition">
          Compare
        </button>
      </div>

      {/* Share Icons */}
      <div className="flex items-center space-x-4 pt-4">
        <p className="text-gray-500 text-sm">Share:</p>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}
