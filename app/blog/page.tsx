import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Page() {
  const blogDir = "blogs";

  const blogs = fs.readdirSync(path.join(blogDir)).map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <div className="pt-10">
      <ul className="menu w-full rounded-box bg-base-200">
        {blogs.map(({ slug, meta }) => (
          <li key={slug}>
            <Link
              href={`blog/${slug}`}
              passHref
              className="flex justify-between"
            >
              {meta.title}{" "}
              <em style={{ textShadow: "0 0 2px #ffffff" }}>{meta.date}</em>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
