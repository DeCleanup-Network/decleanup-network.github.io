const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.un.org",
        pathname: "/sustainabledevelopment/**",
      },
    ],
  },
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.BASE_PATH || "",
  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;
