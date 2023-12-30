import { MDXRemote } from "next-mdx-remote/rsc";

const Bio = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ms10596/ms10596/master/README.md"
  ).then((res) => res.text());
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <MDXRemote source={res} />
      </div>
    </div>
  );
};

export default Bio;
