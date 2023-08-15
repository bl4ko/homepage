/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files
  // This reduces production image size drastically (used in docker)
  output: "standalone",
};

module.exports = nextConfig;
