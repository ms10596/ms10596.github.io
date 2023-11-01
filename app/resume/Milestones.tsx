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
          cardDetailedText: [
            "Developed REST APIs using Typescript, Nestjs, and Prisma following the OpenAPI specifications. I also did a lot of unit testing with Jest.",
            "Developed large React Apps that consume the above APIs. I always try to use the latest widely adopted open-source packages for data fetching, state management, and form handling. I tend to create custom hooks a lot also.",
            "Worked on creating a full loan management system from the ground for one of the biggest startups for SME financing in Egypt.",
            "I've developed an internal tool that automated a task related to GPX processing that involves multiple parties. It has decreased the time taken from a few hours to 2 seconds.",
            "Created an end-to-end type-safe full-stack web app that leverages the power of graphql, typescript, and turborepo.",
            "Worked on developing AlMohaseb ERP desktop app. (https://almohaseb-erp.com/)",
            "Contributed to many open-source projects but my greatest one was with Genie.jl docs (https://github.com/GenieFramework/GenieFrameworkDocs)",
          ],
        },
        {
          cardTitle: "2020-04 - 2020-07",
          cardSubtitle: "Data Scientist",
          cardDetailedText: [
            "Worked on transformer-based models.",
            "Developed NLP semantic similarity pipelines.",
            "Optimize various forecasting models using Julia.",
            "Dealt with state of art Face Recognition models such as Dlib, VGG-Face,..etc.",
            "Built apps that integrate with AWS services such as S3, ElasticSearch, and Rekognition.",
            "Built dashboards using Google Data Studio and BigQuery.",
            "Managed blogs on Medium.",
            ,
          ],
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
          cardDetailedText: [
            "Conducting weekly zoom session to help students with the course content and projects. Topics were basics of backend development using flask and SQLAclhemy",
            "This was a snippet from one of the sessions: https://youtu.be/ah-mZ16sdps",
            "I made a repository for my slides: https://github.com/ms10596/WDND_sessions",
          ],
        },
        {
          cardTitle: "2019-06 - 2019-10",
          cardSubtitle: "Intro to programming",
          cardDetailedText: [
            "Conducting weekly live zoom sessions to help high school students with the course content and projects. Topics were mainly basics of html, css and python",
          ],
        },
      ],
    },
    {
      cardTitle: "Agolo",
      cardSubtitle: "Natural Language Processing Engineering Internship",
      title: "2019-07 - 2019-10",
      link: "https://www.agolo.com",
      media: {
        type: "IMAGE",
        source: {
          url: "/agolo.png",
        },
      },
      cardDetailedText: [
        "Worked on semantic similarity researches for clustering articles.",
        "Deploying clustering services using kubernetes.",
        "Integrating Flask apps with WSGI server for a better concurrency.",
        "Extracting data from datawarehouses and Elasticsearch.",
        "Worked on other problems like duplication detection.",
      ],
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
        <Chrono
          items={milestones}
          mode="VERTICAL_ALTERNATING"
          hideControls
          mediaHeight={100}
        />
      </div>
    </Card>
  );
}
export default Milestones;
