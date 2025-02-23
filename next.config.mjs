import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default withTM(['some-package'])(nextConfig);

