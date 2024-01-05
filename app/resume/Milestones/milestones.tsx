import { readFileSync, readdirSync } from "fs";

import { MDXRemote } from "next-mdx-remote/rsc";
import { TimelineItem } from "react-chrono";
import { groupBy } from "lodash";
import matter from "gray-matter";
import path from "path";

function formatDate(date: string) {
  if (!date) return "Present";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function prepareMilestones(): TimelineItem[] {
  const milestonesDir = path.join("content", "milestones");
  const milestones = readdirSync(milestonesDir)
    .map((filename) => {
      const fileContent = readFileSync(
        path.join(milestonesDir, filename),
        "utf-8"
      );
      const { data: meta, content } = matter(fileContent);
      return {
        meta,
        content,
      } as {
        meta: {
          companyName: string;
          companyUrl: string;
          startDate: string;
          endDate: string;
          jobTitle: string;
          logo: string;
        };
        content: string;
      };
    })
    .toSorted(
      (a, b) =>
        new Date(b.meta.startDate).getTime() -
        new Date(a.meta.startDate).getTime()
    );
  const groups = groupBy(milestones, (milestone) => milestone.meta.companyName);
  return Object.entries(groups).map(([key, value]) => {
    return {
      cardTitle: key,
      title: `${formatDate(value.at(-1)?.meta.startDate!)} - ${formatDate(
        value.at(0)?.meta.endDate!
      )}`,
      url: value[0].meta.companyUrl,
      media: {
        type: "IMAGE",
        source: {
          url: value[0].meta.logo,
        },
      },
      items: value.map((milestone) => {
        return {
          cardTitle: `${formatDate(milestone.meta.startDate)} - ${formatDate(
            milestone.meta.endDate
          )}`,
          cardSubtitle: milestone.meta.jobTitle,
          timelineContent: <MDXRemote source={milestone.content} />,
        };
      }),
    };
  });
}
