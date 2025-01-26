export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tags', // Adding tags field
      title: 'Tags',
      type: 'array', // Allowing multiple tags
      of: [
        {
          type: 'string', // Each tag will be a string
          options: {
            list: [
              { title: 'Food', value: 'food' },
              { title: 'Healthy', value: 'healthy' },
              { title: 'Fruits', value: 'fruits' },
              { title: 'Burger', value: 'burger' },
              { title: 'Pizza', value: 'pizza' },
              { title: 'Veggies', value: 'veggies' },
              { title: 'Snacks', value: 'snacks' },
              { title: 'Chicken', value: 'chicken' },
            ],
          },
        },
      ],
    },
  ],
};
