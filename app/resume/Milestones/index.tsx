"use client";

import { Card, Heading } from "@radix-ui/themes";

import { Chrono } from "react-chrono";
import { FaFlag } from "react-icons/fa6";
import { TimelineProps } from "react-chrono/dist/models/TimelineModel";
import { milestones } from "./milestones";

function Milestones() {
  return (
    <Card>
      <Heading>
        <FaFlag /> Milestones
      </Heading>
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
              secondary: "white",
            },
            classNames: {
              cardText:'!items-start',
            }
          } as TimelineProps)}
        />
      </div>
    </Card>
  );
}
export default Milestones;
