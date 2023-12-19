// const rehypeHighlight = import("rehype-highlight");
// const remarkGfm = import("remark-gfm");

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};
module.exports = withMDX(nextConfig);
