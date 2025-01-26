import { client } from "@/sanity/lib/client"; // Sanity client import
import imageUrlBuilder from "@sanity/image-url";

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
const urlFor = (source: any) => builder.image(source).url();

export const getPostData = async (slug: string) => {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    description,
    author,
    date,
    image {
      asset->{
        _id,
        url
      }
    },
    comments,
    tags[] // Add the tags field here to fetch tags as an array of strings
  }`;

  try {
    const data = await client.fetch(query, { slug });
    if (data && data.image) {
      // Generate the image URL using the urlFor helper function
      data.imageUrl = urlFor(data.image).toString();
    }
    return data;
  } catch (error) {
    console.error("Error fetching post data:", error);
    return null;
  }
};
