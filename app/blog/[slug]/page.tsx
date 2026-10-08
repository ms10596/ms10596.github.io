import { ComponentProps } from 'react';

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

export default async function Post({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const props = getPost({ slug });

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <h1>{props.frontMatter.title}</h1>
      <MDXRemote
        source={props.content}
        components={{
          img: CustomImage as any
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm as any],
            rehypePlugins: [rehypeHighlight as any, rehypeSlug as any]
          }
        }}
      />
    </article>
  );
}

const CustomImage = (props: ComponentProps<'img'>) => (
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  <img {...props} className="mx-auto" style={{ maxWidth: '100%' }} />
);
