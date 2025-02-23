const withTM = (await import('next-transpile-modules')).default;

const nextConfig = withTM(['some-package'])({
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
