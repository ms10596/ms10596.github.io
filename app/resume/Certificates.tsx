import { FaCertificate } from "react-icons/fa6";
const Certificates = () => {
  const certificates = [
    {
      name: "Mathematics for Machine Learning Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P22MNQQMTABD",
      logo: "/coursera.png",
      issuer: "Udacity",
    },
    {
      name: "Cloud Developer for Enterprise Nanodegree",
      link: "https://confirm.udacity.com/QSKEQRAQ",
      logo: "udacity.svg",
      issuer: "Udacity",
    },
    {
      name: "Deep Learning Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RF6JN7X9PNGR",
      logo: "deeplearning-ai-icon.png",
      issuer: "Deeplearning.ai",
    },
    {
      name: "Machine Learning by Stanford University",
      link: "https://www.coursera.org/account/accomplishments/certificate/GTHY9XTXZ75Q",
      logo: "coursera.png",
      issuer: "Coursera",
    },
    {
      name: "Full Stack Web Development Nanodegree",
      link: "https://graduation.udacity.com/confirm/6YYLUWEA",
      logo: "udacity.svg",
      issuer: "Udacity",
    },
  ];
  return (
    <div className="card mt-3">
      <div className="card-title card-header">
        <FaCertificate /> Certificates
      </div>
      <table className="table table-bordered">
        <tbody>
          {certificates.map((certificate,i) => {
            return (
              <tr key={i}>
                <td className="text-center">
                  <img
                    src={certificate.logo}
                    width="25"
                    title={certificate.issuer}
                  />
                </td>
                <td>
                  <a href={certificate.link} target="_blank">
                    {certificate.name}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Certificates;
