import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('content', 'blogs'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('content', 'blogs', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <h1>{props.frontMatter.title}</h1>
      <MDXRemote
        source={props.content}
        components={{
          img: CustomImage
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight as any, rehypeSlug]
          }
        }}
      />
    </article>
  );
}

const CustomImage = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => <img {...props} className="mx-auto" style={{ maxWidth: '100%' }} />;
