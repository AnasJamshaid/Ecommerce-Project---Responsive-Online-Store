import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      "id": 1,
      "title": "Fresh Lime",
      "price": "38.00",
      "image": "/product1.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 100,
      "sku": "FL-001",
      "description": "Fresh and juicy limes."
    },
    {
      "id": 2,
      "title": "Chocolate Muffin",
      "price": "28.00",
      "image": "/product2.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 50,
      "sku": "CM-002",
      "description": "Delicious chocolate muffins for any occasion."
    },
    {
      "id": 3,
      "title": "Burger",
      "price": "21.00",
      "salePrice": "18.00",
      "image": "/product3.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 75,
      "sku": "BG-003",
      "description": "A classic beef burger with all the toppings."
    },
    {
      "id": 4,
      "title": "Country Burger",
      "price": "45.00",
      "image": "/product4.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 120,
      "sku": "CB-004",
      "description": "A country-style burger with homemade ingredients."
    },
    {
      "id": 5,
      "title": "Drink",
      "price": "23.00",
      "salePrice": "20.00",
      "image": "/product5.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 200,
      "sku": "DR-005",
      "description": "Refreshing drink for hot summer days."
    },
    {
      "id": 6,
      "title": "Pizza",
      "price": "43.00",
      "image": "/product6.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 150,
      "sku": "PZ-006",
      "description": "Pizza with fresh ingredients and cheese."
    },
    {
      "id": 7,
      "title": "Cheese Butter",
      "price": "10.00",
      "image": "/product7.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 80,
      "sku": "CB-007",
      "description": "Smooth and creamy cheese butter."
    },
    {
      "id": 8,
      "title": "Sandwiches",
      "price": "25.00",
      "image": "/product8.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 60,
      "sku": "SD-008",
      "description": "Fresh sandwiches with various fillings."
    },
    {
      "id": 9,
      "title": "Chicken Chup",
      "price": "12.00",
      "salePrice": "10.00",
      "image": "/product9.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 40,
      "sku": "CC-009",
      "description": "Spicy chicken chup for a flavorful meal."
    },
    {
      "id": 10,
      "title": "Country Burger",
      "price": "45.00",
      "image": "/product10.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 120,
      "sku": "CB-010",
      "description": "A country-style burger with a unique twist."
    },
    {
      "id": 11,
      "title": "Drink",
      "price": "23.00",
      "salePrice": "20.00",
      "image": "/product11.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 200,
      "sku": "DR-011",
      "description": "A refreshing drink for any time of the day."
    },
    {
      "id": 12,
      "title": "Pizza",
      "price": "43.00",
      "image": "/product12.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 150,
      "sku": "PZ-012",
      "description": "A delicious pizza with multiple toppings."
    },
    {
      "id": 13,
      "title": "Cheese Butter",
      "price": "10.00",
      "image": "/product13.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 80,
      "sku": "CB-013",
      "description": "Buttery cheese with a smooth texture."
    },
    {
      "id": 14,
      "title": "Sandwiches",
      "price": "25.00",
      "image": "/product14.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 60,
      "sku": "SD-014",
      "description": "Variety of sandwiches with fresh fillings."
    },
    {
      "id": 15,
      "title": "Chicken Chup",
      "price": "12.00",
      "image": "/product15.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 40,
      "sku": "CC-015",
      "description": "Chicken chup with a flavorful touch."
    },
    {
      "id": 16,
      "title": "Country Burger",
      "price": "45.00",
      "image": "/product1.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 120,
      "sku": "CB-016",
      "description": "Classic country burger with fresh ingredients."
    },
    {
      "id": 17,
      "title": "Drink",
      "price": "23.00",
      "salePrice": "20.00",
      "image": "/product2.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 200,
      "sku": "DR-017",
      "description": "Cold drink to quench your thirst."
    },
    {
      "id": 18,
      "title": "Pizza",
      "price": "43.00",
      "image": "/product3.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 150,
      "sku": "PZ-018",
      "description": "Delicious pizza with the finest toppings."
    },
    {
      "id": 19,
      "title": "Cheese Butter",
      "price": "10.00",
      "image": "/product4.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 80,
      "sku": "CB-019",
      "description": "Rich and creamy cheese butter for any meal."
    },
    {
      "id": 20,
      "title": "Sandwiches",
      "price": "25.00",
      "image": "/product5.jpg",
      "gallery": ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
      "stock": 60,
      "sku": "SD-020",
      "description": "Fresh and healthy sandwiches."
    }
  ];
  return NextResponse.json(products);
}
