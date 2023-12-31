"use client";

import { Chrono } from "react-chrono";
import { FaFlag } from "react-icons/fa6";
import { TimelineProps } from "react-chrono/dist/models/TimelineModel";
import { milestones } from "./milestones";
import { useTheme } from "next-themes";

function Milestones() {
  const { theme } = useTheme();
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <h2 className="card-title">
          <FaFlag /> Milestones
        </h2>
        <div className="divider" />
        <div>
          <Chrono
            {...({
              items: milestones,
              mode: "VERTICAL",
              flipLayout: true,
              hideControls: true,
              useReadMore: false,
              disableClickOnCircle: true,
              disableTimelinePoint: true,
              disableAutoScrollOnClick: true,
              disableNavOnKey: true,
              mediaSettings: {
                imageFit: "contain",
              },
              mediaHeight: 100,
              theme: {
                primary: "black",
                secondary: "transparent",
              },
              classNames: {
                cardText: "!items-start",
                cardSubTitle: "!text-lg",
                title: "!break-word"
              },
              darkMode: theme === "dark",
            } as TimelineProps)}
          />
        </div>
      </div>
    </div>
  );
}
export default Milestones;
