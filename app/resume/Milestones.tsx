"use client";

import { Card, Heading } from "@radix-ui/themes";

import { Chrono } from "react-chrono";
import { FaFlag } from "react-icons/fa6";

function Milestones() {
  const milestones = [
    {
      cardTitle: "Optomatica",
      title: "2020-04 - present",
      link: "https://optomatica.com/",
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
          cardDetailedText: "",
        },
        {
          cardTitle: "2020-04 - 2020-07",
          cardSubtitle: "Data Scientist",
          cardDetailedText: "",
        },
      ],
    },
    {
      cardTitle: "Udacity",
      cardSubtitle: "Session Lead",
      title: "2019-06 - 2021-04",
      logoLink: "/udacity.svg",
      link: "https://udacity.com",
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
          cardDetailedText: "",
        },
        {
          cardTitle: "2019-06 - 2019-10",
          cardSubtitle: "Intro to programming",
          cardDetailedText: "",
        },
      ],
    },
    {
      cardTitle: "Agolo",
      cardSubtitle: "Natural Language Processing Engineering Internship",
      title: "2019-07 - 2019-10",
      logoLink: "/agolo.ico",
      link: "https://www.agolo.com",
      media: {
        type: "IMAGE",
        source: {
          url: "/agolo.ico",
        },
      },
    },
    {
      cardTitle: "Cairo University",
      cardSubtitle: "Bachelor's degree, Computer Science",
      title: "2015-09 - 2019-06",
      logoLink: "/fci.jpg",
      link: "https://fci.cu.edu.eg/Home",
      media: {
        type: "IMAGE",
        source: {
          url: "/fci.jpg",
        },
      },
      cardDetailedText: "Faculty of Computers and Artificial Intelligence",
    },
  ];
  return (
    <Card>
      <Heading>
        <FaFlag /> Milestones
      </Heading>
      <div>
        <Chrono items={milestones} mode="VERTICAL_ALTERNATING" hideControls />
      </div>
    </Card>
  );
}
export default Milestones;
