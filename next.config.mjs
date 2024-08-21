/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DB_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/student7-8?retryWrites=true&w=majority&appName=edify",
    SECURE_URL: "job_portal_1233qwertyuiop",

    // Cloudinary ------------------------------
    NEXT_PUBLIC_SECRET_KEY: "1234555aaddad",
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dmy1m9vrc",
    NEXT_PUBLIC_CLOUDINARY_API_KEY: "674835324448873",
    NEXT_PUBLIC_CLOUDINARY_API_SECRET: "XyNbfGExh3MmTjiHY9TgmfEzc30",
  },
};

export default nextConfig;
