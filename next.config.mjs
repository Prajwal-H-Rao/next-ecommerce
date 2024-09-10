/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.freebiesupply.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol:'https',
        hostname:'cdn.freebiesupply.com'
      }
    ],
    loader: 'default',
    // path: 'https://cdn.freebiesupply.com/', // Specify the base path for your images
  },
};

export default nextConfig;
