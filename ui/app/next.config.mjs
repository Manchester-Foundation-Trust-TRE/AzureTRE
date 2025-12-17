/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for deployment to Azure Storage
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Configure base path if needed (currently "/" as per vite config)
  basePath: '',
  // Ensure compatibility with existing routing
  reactStrictMode: true,
  // Preserve existing TypeScript paths
  typescript: {
    // Do not fail build on TS errors initially during migration
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
