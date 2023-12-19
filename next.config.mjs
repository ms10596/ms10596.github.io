// const rehypeHighlight = import("rehype-highlight");
// const remarkGfm = import("remark-gfm");
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};
export default withMDX(nextConfig);
