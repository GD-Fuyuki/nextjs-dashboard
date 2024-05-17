/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["c9f69013330940ca95b9aaa8deaa286f.vfs.cloud9.ap-northeast-1.amazonaws.com"],
      // allowedForwardedHosts: ["localhost:3000"],
      // ^ You might have to use this property depending on your exact version.
    }
  }
};

module.exports = nextConfig;
