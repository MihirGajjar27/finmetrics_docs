/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'react-syntax-highlighter',
  // Add any other ESM-only packages if needed
]);

const nextConfig = {
  // reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    'unoptimized': true
  }
};

export default nextConfig;
