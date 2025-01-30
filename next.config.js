module.exports = {
  images: {
    domains: ['cdn.sanity.io'], // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during builds
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map'; // Debugging
    }
    return config;
  },
};
