/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Requirement for docker: https://stackoverflow.com/a/70704689, reduces image size drastically: https://www.dave-beaumont.co.uk/2022/02/22/reducing-the-dockerized-image-size-of-a-next-js-kontent-integrated-website-with-next-standalone-functionality-in-v12-1/
};

module.exports = nextConfig;
