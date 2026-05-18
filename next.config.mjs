/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/legacy/mentions-legales.html",
        destination: "/mentions-legales",
        permanent: true,
      },
      {
        source: "/legacy/cgv.html",
        destination: "/cgv",
        permanent: true,
      },
      {
        source: "/legacy/politique-confidentialite.html",
        destination: "/politique-confidentialite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
