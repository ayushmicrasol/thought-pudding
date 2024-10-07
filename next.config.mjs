/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: process.env.NEXT_APP_BASE_API_URL,
  },
};

export default nextConfig;
