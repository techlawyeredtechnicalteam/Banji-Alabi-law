import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/practice-areas", destination: "/expertise", permanent: true },
      { source: "/practice-areas/:slug", destination: "/expertise", permanent: true },
      { source: "/team", destination: "/people", permanent: true },
      { source: "/insights", destination: "/articles", permanent: true },
      { source: "/insights/:slug", destination: "/articles/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
