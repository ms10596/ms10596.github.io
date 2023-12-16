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
    <div className="pt-10">
      <ul className="menu w-full rounded-box bg-base-200">
        {routesFiles.map(({ slug, meta }) => (
          <li key={slug}>
            <Link href={`blog/${slug}`} className="flex justify-between">
              {meta.title}{" "}
              <em style={{ textShadow: "0 0 2px #ffffff" }}>{meta.date}</em>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
