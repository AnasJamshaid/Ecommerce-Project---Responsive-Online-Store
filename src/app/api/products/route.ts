import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      title: "Fresh Lime",
      price: "$38.00",
      salePrice: "$45.00",
      image: "/product1.jpg",
    },
    {
      id: 2,
      title: "Chocolate Muffin",
      price: "$28.00",
      image: "/product2.jpg",
    },
    {
      id: 3,
      title: "Burger",
      price: "$21.00",
      salePrice: "$45.00",
      image: "/product3.jpg",
    },
    { id: 4, title: "Country Burger", price: "$45.00", image: "/product4.jpg" },
    {
      id: 5,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product5.jpg",
    },
    { id: 6, title: "Pizza", price: "$43.00", image: "/product6.jpg" },
    {
      id: 7,
      title: "Cheese Butter",
      price: "$10.00",

      image: "/product7.jpg",
    },
    {
      id: 8,
      title: "Sandwiches",
      price: "$25.00",

      image: "/product8.jpg",
    },
    {
      id: 9,
      title: "Chicken Chup",
      price: "$12.00",
      salePrice: "$115",
      image: "/product9.jpg",
    },
    {
      id: 10,
      title: "Country Burger",
      price: "$45.00",

      image: "/product10.jpg",
    },
    {
      id: 11,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product11.jpg",
    },
    {
      id: 12,
      title: "Pizza",
      price: "$43.00",

      image: "/product12.jpg",
    },
    {
      id: 13,
      title: "Cheese Butter",
      price: "$10.00",

      image: "/product13.jpg",
    },
    {
      id: 14,
      title: "Sandwiches",
      price: "$25.00",

      image: "/product14.jpg",
    },
    {
      id: 15,
      title: "Chicken Chup",
      price: "$12.00",

      image: "/product15.jpg",
    },
    {
      id: 16,
      title: "Country Burger",
      price: "$45.00",

      image: "/product1.jpg",
    },
    {
      id: 17,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product2.jpg",
    },
    {
      id: 18,
      title: "Pizza",
      price: "$43.00",

      image: "/product3.jpg",
    },
    {
      id: 19,
      title: "Cheese Butter",
      price: "$10.00",

      image: "/product4.jpg",
    },
    {
      id: 20,
      title: "Sandwiches",
      price: "$25.00",

      image: "/product5.jpg",
    },
    {
      id: 21,
      title: "Chicken Chup",
      price: "$12.00",

      image: "/product6.jpg",
    },
    {
      id: 22,
      title: "Country Burger",
      price: "$45.00",

      image: "/product7.jpg",
    },
    {
      id: 23,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product8.jpg",
    },
    {
      id: 24,
      title: "Pizza",
      price: "$43.00",

      image: "/product9.jpg",
    },
    {
      id: 25,
      title: "Cheese Butter",
      price: "$10.00",

      image: "/product10.jpg",
    },
    {
      id: 26,
      title: "Sandwiches",
      price: "$25.00",

      image: "/product11.jpg",
    },
    {
      id: 27,
      title: "Chicken Chup",
      price: "$12.00",

      image: "/product12.jpg",
    },
    {
      id: 28,
      title: "Country Burger",
      price: "$45.00",

      image: "/product13.jpg",
    },
    {
      id: 29,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product14.jpg",
    },
    {
      id: 30,
      title: "Pizza",
      price: "$43.00",
      image: "/product15.jpg",
    },

    {
      id: 31,
      title: "Fresh Lime",
      price: "$38.00",
      salePrice: "$45.00",
      image: "/product1.jpg",
    },
    {
      id: 32,
      title: "Chocolate Muffin",
      price: "$28.00",
      image: "/product2.jpg",
    },
    {
      id: 33,
      title: "Burger",
      price: "$21.00",
      salePrice: "$45.00",
      image: "/product3.jpg",
    },
    {
      id: 34,
      title: "Country Burger",
      price: "$45.00",
      image: "/product4.jpg",
    },
    {
      id: 35,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product5.jpg",
    },
    { id: 36, title: "Pizza", price: "$43.00", image: "/product6.jpg" },
    {
      id: 37,
      title: "Cheese Butter",
      price: "$10.00",

      image: "/product7.jpg",
    },
    {
      id: 38,
      title: "Sandwiches",
      price: "$25.00",

      image: "/product8.jpg",
    },
    {
      id: 39,
      title: "Chicken Chup",
      price: "$12.00",
      salePrice: "$115",
      image: "/product9.jpg",
    },
    {
      id: 40,
      title: "Country Burger",
      price: "$45.00",

      image: "/product10.jpg",

    },
    {
      id: 41,
      title: "Drink",
      price: "$23.00",
      salePrice: "$45.00",
      image: "/product11.jpg",
    },
    {
      id: 42,
      title: "Pizza",
      price: "$43.00",

      image: "/product12.jpg",
    },
    {
      id: 43,
      title: "Cheese Butter",
      price: "$10.00",

      image: "/product13.jpg",
    },
    {
      id: 44,
      title: "Sandwiches",
      price: "$25.00",

      image: "/product14.jpg",
    },
    {
      id: 45,
      title: "Chicken Chup",
      price: "$12.00",

      image: "/product15.jpg",
    }
  ];
  return NextResponse.json(products);

  
}


