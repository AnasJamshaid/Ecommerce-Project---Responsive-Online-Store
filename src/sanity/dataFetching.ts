import { client } from "@/sanity/lib/client";

export const getFoodData = async () => {
  try {
    return await client.fetch(
      '*[_type == "food"]{_id, name, price, originalPrice, tags, image, description, available}'
    );
  } catch (error) {
    console.error("Failed to fetch food items:", error);
    return [];
  }
};
