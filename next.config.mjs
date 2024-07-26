/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DB_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/student7-8?retryWrites=true&w=majority&appName=edify",
  },
};

export default nextConfig;
