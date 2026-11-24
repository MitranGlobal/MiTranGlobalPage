/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Success Stories was renamed "Real Life Real Stories"
      { source: "/success-stories", destination: "/real-life-real-stories", permanent: true },
    ];
  },
};

export default nextConfig;
