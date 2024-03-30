import { compileMDX } from 'next-mdx-remote/rsc';

const Bio = async () => {
  const source = await fetch(
    'https://raw.githubusercontent.com/ms10596/ms10596/master/README.md'
  )
    .then((res) => res.text())
    .then((source) => compileMDX({ source }));
  return (
    <div className="card bg-base-300 card-compact">
      <div className="card-body">{source.content}</div>
    </div>
  );
};

export default Bio;
