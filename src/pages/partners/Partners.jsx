import React from "react";
import "./Partners.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import Italio from "../../assets/partners/ItaloBrasileira.png";
import uni from "../../assets/partners/uni.webp";
import pegaso from "../../assets/partners/Pegaso.jpg";
import tech from "../../assets/partners/techricks.png";
import etl from "../../assets/partners/etlforma.jpg";
import hetg from "../../assets/partners/hetg.jpeg";
import idea from "../../assets/partners/ideaeuropa.png";
import uim from "../../assets/partners/uim.webp";

function Partners() {
  const partners = [
    {
      name: "Italo Brasileira",
      url: "https://italo.com.br",
      description:
        "Centro Universitário Ítalo Brasileiro (popularly known as UniÍtalo), founded by professor and Italian immigrant Pasquale Cascino on 1949, is a thriving private Brazilian university with its main campus located in the Santo Amaro district of São Paulo.",
      image: Italio,
    },
    {
      name: "UniJaguaribe",
      url: "https://unijaguaribe.edu.br",
      description:
        "Unijaguaribe is the point of reference for higher education in the north-east of Brazil, with its large campus headquartered in Aracati, Cearà.",
      image: uni,
    },
    {
      name: "TechBricks",
      url: "https://techbricks.io",
      description:
        "Based in Rome, TechBricks is an all Italian innovator of deep tech Venture Studio and a key player in the entire ecosystem for startups, SME's and corporates.",
      image: tech,
    },
    {
      name: "UniCampus HETG",
      url: "https://www.unicampushetg.ch",
      description:
        "UniCampus HETG Haute École Télématique is a private university institution under Swiss law, based in international Genève, Switzerland.",
      image: hetg,
    },
    {
      name: "IdeaEuropa",
      url: "https://www.ideaeuropa.it",
      description:
        "Idea Europa Aps is a third sector body, experts in carrying out assistance activities for established and soon-to-be established associations, from the drafting of their statute, to the drafting of regional, national and European projects, to the creation of cultural and training events.",
      image: idea,
    },
    {
      name: "UIM",
      url: "http://www.uim.it",
      description:
        "The UIM, Union of Italians in the World, is the association that deals with the protection of the rights and interests of Italians in the world, and offers their support and assistance in the social, political and social security fields.",
      image: uim,
    },
  ];

  return (
    <>
      <SubHeader
        title="Partners"
        path={[{ url: "/", label: "Home" }]}
        current="Partners"
      />

      <div className="container-fluid partners">
        <div className="row my-5">
          <h2
            className="container-heading-green"
            style={{ fontSize: 25, fontWeight: 700 }}
          >
            Partnerships
          </h2>
        </div>

        <div>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="_partner_row"
              style={{
                backgroundColor: index % 2 === 0 ? "#f2f8f1" : "transparent",
              }}
            >
              <div className="pt">
                <div className="_part_image">
                  <img src={partner.image} alt={partner.name} />
                </div>
                <div className="_part_details">
                  <span className="_part_name">{partner.name}</span>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="_part_link"
                  >
                    {partner.url}
                  </a>
                  <p className="_part_desc">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Partners;
