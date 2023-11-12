import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Page() {
  const routesPath = path.join(process.cwd(), "app", "blog");
  const routesFiles = fs
    .readdirSync(routesPath, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map(({ name: slug }) => ({
      slug,
      meta: require(`./${slug}/page.mdx`).meta,
    }));

  return (
    <div className="py-80">
      <h1>blog</h1>
      <div>
        {routesFiles.map(({ slug, meta }) => (
          <Link key={slug} href={`blog/${slug}`}>
            {meta.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
