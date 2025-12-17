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
    // Fail build on TS errors to maintain code quality
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
