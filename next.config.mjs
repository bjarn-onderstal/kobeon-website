/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/over-ons", destination: "/over-kobeon", permanent: true },
      { source: "/about", destination: "/over-kobeon", permanent: true },
      { source: "/careers", destination: "/werken-bij", permanent: true },
      { source: "/jobs/mendix-consultant", destination: "/vacatures/mendix-consultant-solution-architect", permanent: true },
      { source: "/digitalisering-in-de-maakindustrie", destination: "/sectoren/maakindustrie", permanent: true },
      { source: "/onze-diensten/business-financial-services", destination: "/diensten", permanent: true },
      { source: "/onze-diensten/:path*", destination: "/diensten", permanent: true },
      { source: "/solutions/innovation", destination: "/diensten", permanent: true },
      { source: "/solutions/:path*", destination: "/diensten", permanent: true },
      { source: "/mendix-meets-ai", destination: "/diensten/agentic-ai", permanent: true },
      { source: "/klanttevredenheid", destination: "/projecten", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/events", destination: "/", permanent: true },
      { source: "/mendixmeetup", destination: "/", permanent: true },
      { source: "/insights/:path*", destination: "/", permanent: true },
      { source: "/jobs/:path*", destination: "/vacatures", permanent: true },
    ];
  },
};
export default nextConfig;
