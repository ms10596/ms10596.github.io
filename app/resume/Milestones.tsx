import { FaArrowRight, FaFlag } from "react-icons/fa6";

import Image from "next/image";

function Milestones() {
  const milestones = [
    {
      company: "Optomatica",
      role: "Data Scientist",
      start_date: "2020-04",
      end_date: "present",
      logo_link: "/opto.png",
      link: "https://optomatica.com/",
    },
    {
      company: "Agolo",
      role: "Natural Language Processing Engineering Internship",
      start_date: "2019-07",
      end_date: "2019-10",
      logo_link: "/agolo.ico",
      link: "https://www.agolo.com",
      duration: "3 mos",
    },
    {
      company: "Udacity",
      role: "Session Lead",
      start_date: "2019-06",
      end_date: "2019-10",
      logo_link: "/udacity.svg",
      link: "https://udacity.com",
      duration: "4 mos",
    },
    {
      company: "Cairo University",
      role: "Bachelor's degree, Computer Science",
      start_date: "2015-09",
      end_date: "2019-06",
      note: "Faculty of Computers and Artificial Intelligence",
      logo_link: "/fci.ico",
      link: "https://fci.cu.edu.eg/Home",
      duration: "4 yrs",
    },
  ];
  return (
    <div className="card mt-3">
      <div className="card-title card-header">
        <FaFlag /> Milestones
      </div>
      <table className="table table-bordered">
        {milestones.map((milestone, i) => {
          return (
            <tr key={i}>
              <td className="text-center" style={{ width: "15px" }}>
                <a href={milestone.link} target="_blank">
                  <Image
                    height={70}
                    width={70}
                    src={milestone.logo_link}
                    alt={`${milestone.company} logo`}
                  />
                </a>
              </td>
              <td>
                {milestone.start_date} <FaArrowRight size={30} /> {milestone.end_date} .{" "}
                {milestone.duration}
                <br />
                <strong>{milestone.company}</strong>
                <br />
                {milestone.role}
                <br />
                <em>{milestone.note}</em>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Milestones;
