import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Page() {
  const routesPath = path.join(process.cwd(), "app", "blog");
  const routesFiles = fs.readdirSync(routesPath);

  return (
    <div>
      <h1>blog</h1>
      {routesFiles
        .filter((file) => file !== "page.tsx")
        .map((file) => (
          <Link key={file} href={`blog/${file}`}>
            {file}
          </Link>
        ))}
    </div>
  );
}