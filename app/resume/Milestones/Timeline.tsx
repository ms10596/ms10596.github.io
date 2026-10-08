import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { CompanyMilestone } from './milestones';

export function Timeline({ milestones }: { milestones: CompanyMilestone[] }) {
  return (
    <ul className="timeline timeline-vertical timeline-compact w-full">
      {milestones.map((milestone, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === milestones.length - 1;

        return (
          <li key={milestone.companyName} className="w-full">
            {!isFirst && <hr className="bg-primary/30" />}

            <div className="timeline-middle">
              <span className="flex size-4 items-center justify-center rounded-full bg-primary ring-4 ring-base-300">
                <span className="size-1.5 rounded-full bg-base-100" />
              </span>
            </div>

            <div className="timeline-end timeline-box w-full bg-base-100 border border-base-content/10 shadow-sm rounded-box p-4 md:p-6 my-2 text-base">
              {/* Header: Company Logo, Title, and Date Badge */}
              <div className="flex items-start gap-4">
                {milestone.logo && (
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-base-200/60 p-1.5 border border-base-content/10">
                    <Image
                      src={`/${milestone.logo}`}
                      alt={milestone.companyName}
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {milestone.companyUrl ? (
                      <a
                        href={milestone.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-lg text-base-content hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        {milestone.companyName}
                        <FaArrowUpRightFromSquare className="size-3 text-base-content/40" />
                      </a>
                    ) : (
                      <h3 className="font-bold text-lg text-base-content">
                        {milestone.companyName}
                      </h3>
                    )}
                    <span className="badge badge-sm badge-neutral font-mono font-medium">
                      {milestone.dateRange}
                    </span>
                  </div>

                  {milestone.roles.length === 1 && (
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {milestone.roles[0].jobTitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Roles & Descriptions */}
              {milestone.roles.length === 1 ? (
                <div className="mt-3 prose prose-sm dark:prose-invert max-w-none text-base-content/85">
                  {milestone.roles[0].content}
                </div>
              ) : (
                <div className="mt-4 space-y-4 divide-y divide-base-200">
                  {milestone.roles.map((role, rIdx) => (
                    <div key={rIdx} className={rIdx > 0 ? 'pt-4' : ''}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-sm md:text-base text-primary">
                          {role.jobTitle}
                        </h4>
                        <span className="text-xs text-base-content/60 font-mono">
                          {role.dateRange}
                        </span>
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-base-content/85">
                        {role.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!isLast && <hr className="bg-primary/30" />}
          </li>
        );
      })}
    </ul>
  );
}
