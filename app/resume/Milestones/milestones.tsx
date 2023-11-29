import Agolo from "./agolo.mdx";
import CairoUniversity from "./cairo-university.mdx";
import OptomaticaFirst from "./optomatica-first.mdx";
import OptomaticaSecond from "./optomatica-second.mdx";
import { TimelineItem } from "react-chrono";
import UdacityFirst from "./udacity-first.mdx";
import UdacitySecond from "./udacity-second.mdx";

export const milestones: TimelineItem[] = [
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
        cardTitle: "2021-08 - present",
        cardSubtitle: "Full Stack Web Developer",
        timelineContent: <OptomaticaSecond />,
      },
      {
        cardTitle: "2020-04 - 2021-07",
        cardSubtitle: "Data Scientist",
        timelineContent: <OptomaticaFirst />,
      },
    ],
  },
  {
    cardTitle: "Udacity",
    url: "https://udacity.com",
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
        cardSubtitle: "Session Lead: Web development with Python",
        timelineContent: <UdacitySecond />,
      },
      {
        cardTitle: "2019-06 - 2019-10",
        cardSubtitle: "Session Lead: Intro to programming",
        timelineContent: <UdacityFirst />,
      },
    ],
  },
  {
    cardTitle: "Agolo",
    url: "https://agolo.com",
    title: "2019-07 - 2019-10",
    media: {
      type: "IMAGE",
      source: {
        url: "/agolo.png",
      },
    },
    items: [
      {
        cardTitle: "2019-07 - 2019-10",
        cardSubtitle: "Natural Language Processing Engineering Internship",
        timelineContent: <Agolo />,
      },
    ],
  },
  {
    cardTitle: "Cairo University",
    url: "https://fcai.cu.edu.eg/",
    media: {
      type: "IMAGE",
      source: {
        url: "/fci.jpg",
      },
    },
    items: [
      {
        cardTitle: "2015-09 - 2019-06",
        cardSubtitle: "Bachelor's degree, Computer Science",
        timelineContent: <CairoUniversity />,
      },
    ],
  },
];
