import { client } from "@/sanity/lib/client";

// Fetch all food items with additional fields including gallery images
export const getFoodData = async () => {
  const query = `*[_type == "food"]{
    _id, 
    name, 
    price, 
    originalPrice, 
    "image": image.asset->url, 
    "gallery": gallery[].asset->url,  // Fetching gallery images
    tags, 
    categories, 
    badges, 
    shortDescription, 
    description, 
    sku, 
    available
  }`;
  const data = await client.fetch(query);
  return data;
};

// Fetch a specific food item by its ID with additional fields including gallery images
export const getFoodDataById = async (id: string) => {
  const query = `*[_type == "food" && _id == $id][0]{
    _id,
    name,
    description,
    price,
    originalPrice,
    "image": image.asset->url,
    "gallery": gallery[].asset->url,  // Fetching gallery images
    tags,
    categories,
    badges,
    shortDescription,
    sku,
    available
  }`;
  const params = { id };

  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
