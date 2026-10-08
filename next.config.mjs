import path from 'path';
import createMDX from '@next/mdx';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  turbopack: {
    root: path.resolve('.')
  }
};
export default withMDX(nextConfig);
