import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function Page() {
  const blogDir = path.join('content', 'blogs');

  const blogs = fs
    .readdirSync(path.join(blogDir))
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(blogDir, filename),
        'utf-8'
      );
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace('.mdx', '')
      };
    })
    .toSorted(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );

  return (
    <div className="pt-10">
      <h2 className="text-2xl font-bold">Latest Blogs</h2>
      <ul className="menu menu-lg w-full rounded-box bg-base-200">
        {blogs.map(({ slug, meta }) => (
          <li key={slug}>
            <Link
              href={`blog/${slug}`}
              passHref
              className="flex justify-between"
            >
              {meta.title}{' '}
              <em style={{ textShadow: '0 0 2px #ffffff' }}>{meta.date}</em>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
