/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // semua path diizinkan
      },
      {
        protocol: "http",
        hostname: "pasticuan.co.id",
        pathname: "/**", // semua path diizinkan
      },
    ],
  },
};

export default nextConfig;
