"use client";

import { Card, Heading } from "@radix-ui/themes";
import { Chrono, TimelineItem } from "react-chrono";

import Agolo from "./agolo.mdx";
import CairoUniversity from "./cairo-university.mdx";
import { FaFlag } from "react-icons/fa6";
import OptomaticaFirst from "./optomatica-first.mdx";
import OptomaticaSecond from "./optomatica-second.mdx";
import { TimelineProps } from "react-chrono/dist/models/TimelineModel";
import UdacityFirst from "./udacity-first.mdx";
import UdacitySecond from "./udacity-second.mdx";

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
            },
          } as TimelineProps)}
        />
      </div>
    </Card>
  );
}
const milestones: TimelineItem[] = [
  {
    cardTitle: "Optomatica",
    title: "2020-04 - present",
    url: "https://optomatica.com",
    media: {
      type: "IMAGE",
      source: {
        url: "/optomatica.png",
      },
    },
    items: [
      {
        cardTitle: "2020-08 - present",
        cardSubtitle: "Full Stack Web Developer",
        timelineContent: <OptomaticaSecond />,
      },
      {
        cardTitle: "2020-04 - 2020-07",
        cardSubtitle: "Data Scientist",
        timelineContent: <OptomaticaFirst />,
      },
    ],
  },
  {
    cardTitle: "Udacity",
    url: "https://udacity.com",
    cardSubtitle: "Session Lead",
    title: "2019-06 - 2021-04",
    media: {
      type: "IMAGE",
      source: {
        url: "/udacity.svg",
      },
    },
    items: [
      {
        cardTitle: "2020-08 - 2021-04",
        cardSubtitle: "Web development with Python",
        timelineContent: <UdacitySecond />,
      },
      {
        cardTitle: "2019-06 - 2019-10",
        cardSubtitle: "Intro to programming",
        timelineContent: <UdacityFirst />,
      },
    ],
  },
  {
    cardTitle: "Agolo",
    url: "https://agolo.com",
    cardSubtitle: "Natural Language Processing Engineering Internship",
    title: "2019-07 - 2019-10",
    media: {
      type: "IMAGE",
      source: {
        url: "/agolo.png",
      },
    },
    timelineContent: <Agolo />,
  },
  {
    cardTitle: "Cairo University",
    url: "https://fcai.cu.edu.eg/",
    cardSubtitle:
      "Bachelor's degree, Computer Science at the Faculty of Computers and Artificial Intelligence",
    title: "2015-09 - 2019-06",
    media: {
      type: "IMAGE",
      source: {
        url: "/fci.jpg",
      },
    },
    timelineContent: <CairoUniversity />,
  },
];
export default Milestones;
