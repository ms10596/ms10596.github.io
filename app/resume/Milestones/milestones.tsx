import { readFileSync, readdirSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import groupBy from 'lodash/groupBy';
import { MDXRemote } from 'next-mdx-remote/rsc';

function formatDate(date?: string) {
  if (!date) return 'Present';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export interface MilestoneRole {
  jobTitle: string;
  startDate: string;
  endDate?: string;
  dateRange: string;
  content: React.ReactNode;
}

export interface CompanyMilestone {
  companyName: string;
  companyUrl?: string;
  logo: string;
  dateRange: string;
  roles: MilestoneRole[];
}

export function prepareMilestones(): CompanyMilestone[] {
  const milestonesDir = path.join('content', 'milestones');
  const milestones = readdirSync(milestonesDir)
    .map((filename) => {
      const fileContent = readFileSync(
        path.join(milestonesDir, filename),
        'utf-8'
      );
      const { data: meta, content } = matter(fileContent);
      return {
        meta,
        content
      } as {
        meta: {
          companyName: string;
          companyUrl?: string;
          startDate: string;
          endDate?: string;
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

  return Object.entries(groups).map(([companyName, roleMilestones]) => {
    return {
      companyName,
      companyUrl: roleMilestones[0].meta.companyUrl,
      logo: roleMilestones[0].meta.logo,
      dateRange: `${formatDate(roleMilestones.at(-1)?.meta.startDate)} - ${formatDate(
        roleMilestones.at(0)?.meta.endDate
      )}`,
      roles: roleMilestones.map((milestone) => ({
        jobTitle: milestone.meta.jobTitle,
        startDate: milestone.meta.startDate,
        endDate: milestone.meta.endDate,
        dateRange: `${formatDate(milestone.meta.startDate)} - ${formatDate(
          milestone.meta.endDate
        )}`,
        content: <MDXRemote source={milestone.content} />
      }))
    };
  });
}
