const foods = {
  name: 'food',
  type: 'document',
  title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Food Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Auto-generated slug based on the food name',
      options: {
        source: 'name', // Automatically generate the slug from the `name` field
        maxLength: 96, // Optional: Set a max length for the slug
      },
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'Categories of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      of: [{ type: 'string' }],
    },
    {
      name: 'price',
      type: 'number',
      title: 'Current Price',
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Price before discount (if any)',
    },
    {
      name: 'badges',
      type: 'array',
      title: 'Badges',
      description: 'Badges to highlight (e.g., Sale, New, Popular)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule: { unique: () => any }) => Rule.unique(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Food Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      description: 'Additional images of the food item (e.g., different angles, close-ups)',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Tags for categorizing or highlighting food items (e.g., Bestseller, Spicy, Vegan)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'A brief description of the food item (e.g., great for lunch)',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Detailed description of the food item',
    },
    {
      name: 'sku',
      type: 'string',
      title: 'SKU Number',
      description: 'Stock Keeping Unit number for inventory management',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Indicates if the food item is in stock or not',
    },
  ],
};

export default foods;
