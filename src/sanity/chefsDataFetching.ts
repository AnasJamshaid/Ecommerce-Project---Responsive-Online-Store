import { client } from "@/sanity/lib/client"; // Adjust the import path if needed

export const getChefsData = async () => {
  try {
    const chefsData = await client.fetch(
      '*[_type == "chef"]{_id, name, position, image, description, available}'
    );
    return chefsData;
  } catch (error) {
    console.error("Failed to fetch chef data:", error);
    return [];
  }
};
