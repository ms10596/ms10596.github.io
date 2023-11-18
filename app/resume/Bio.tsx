import { Card } from "@radix-ui/themes";
import { MDXRemote } from "next-mdx-remote/rsc";

const Bio = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ms10596/ms10596/master/README.md"
  ).then((res) => res.text());
  return (
    <Card>
      <MDXRemote source={res} />
    </Card>
  );
};

export default Bio;
