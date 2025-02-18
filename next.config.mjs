/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["placehold.co"],
  },
};

export default nextConfig;
