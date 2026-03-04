const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  async redirects() {
    return [
      { source: "/user-guide", destination: "/userguide", permanent: true },
    ];
  },
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
