import React from "react";
import "./Partners.css";
import Research from "../reseach/Research";
import SubHeader from "../../globals/SubHeader/SubHeader";
import Italio from "../../assets/partners/ItaloBrasileira.png";
import uni from "../../assets/partners/uni.png";
import pegaso from "../../assets/partners/Pegaso.jpg";
import tech from "../../assets/partners/techricks.png";
import etl from "../../assets/partners/etlforma.jpg";
import hetg from "../../assets/partners/hetg.jpeg";
import idea from "../../assets/partners/ideaeuropa.png";
import uim from "../../assets/partners/uim.png";

function Partners() {
  return (
    <>
      <SubHeader
        title={"Partners"}
        path={[{ url: "/", label: "Home" }]}
        current={"Partners"}
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
        <div className="row" style={{ backgroundColor: "#f2f8f1", padding : "3rem 15rem" }}>
          <div className="col-3 partners-row">
            <img src={Italio} alt="Person" />
          </div>
          <div className="col-7 d-flex flex-column gap-4 py-2">
            <span>Italo Brasileira</span>
            <a>https://italo.com.br</a>
            <p>
              Centro Universitário Ítalo Brasileiro (popularly known as
              UniÍtalo), founded by professor and Italian immigrant Pasquale
              Cascino on 1949, is a thriving private Brazilian university with
              its main campus located in the Santo Amaro district of São Paulo.
            </p>
          </div>
        </div>
        <div className="row" style={{padding : "3rem 15rem" }}>
          <div className="col-3 partners-row">
            <img src={uni} alt="Person" />
          </div>
          <div className="col-7 d-flex flex-column gap-4 py-2">
            <span>UniJaguaribe</span>
            <a>https://unijaguaribe.edu.br</a>
            <p>
              Unijaguaribe is the point of reference for higher education in the
              north-east of Brazil, with its large campus headquartered in
              Aracati, Cearà.
            </p>
          </div>
        </div>
       {/*  <div className="row p-5" style={{ backgroundColor: "#f2f8f1" }}>
          <div className="col-2 partners-row">
            <img src={pegaso} alt="Person" />
          </div>
          <div className="col-8 d-flex flex-column gap-4 py-2">
            <span>Pegaso International</span>
            <a>https://pegasointernational.eu</a>
            <p>
              Pegaso International is the international branch of Università
              Telematica Pegaso, the largest online and private university in
              Italy. Headquartered in Malta, it aims to build and disseminate a
              platform of knowledge under a global perspective.
            </p>
          </div>
        </div> */}
        <div className="row my-5">
          <h2
            className="container-heading-green"
            style={{ fontSize: 25, fontWeight: 700 }}
          >
            Academic Partnerships
          </h2>
        </div>
        <div className="row" style={{ backgroundColor: "#f2f8f1", padding : "3rem 15rem" }}>
          <div className="col-3 partners-row">
            <img src={tech} alt="Person" />
          </div>
          <div className="col-7 d-flex flex-column gap-4 py-2">
            <span>TechBricks</span>
            <a>https://techbricks.io</a>
            <p>
              Based in Rome, TechBricks is an all Italian innovator of deep tech
              Venture Studio and a key player in the entire ecosystem for
              startups, SME&#39;s and corporates
            </p>
          </div>
        </div>
       {/*  <div className="row p-5" style={{ backgroundColor: "#f2f8f1" }}>
          <div className="col-2 partners-row">
            <img src={etl} alt="Person" />
          </div>
          <div className="col-8 d-flex flex-column gap-4 py-2">
            <span>ETLForma</span>
            <a>https://www.etlforma.com</a>
            <p>
              ETLForma is a large consulting and training company specialised in
              IT solutions. Based in the industrial and corporate hub of Milan,
              Italy.
            </p>
          </div>
        </div> */}
        <div className="row" style={{ padding : "3rem 15rem" }}>
          <div className="col-3 partners-row">
            <img src={hetg} alt="Person" />
          </div>
          <div className="col-7 d-flex flex-column gap-4 py-2">
            <span>UniCampus HETG</span>
            <a>https://www.unicampushetg.ch</a>
            <p>
              UniCampus HETG Haute École Télématique is a private university
              institution under Swiss law, based in international Genève,
              Switzerland.
            </p>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#f2f8f1", padding : "3rem 15rem" }}>
          <div className="col-3 partners-row">
            <img src={idea} alt="Person" />
          </div>
          <div className="col-7 d-flex flex-column gap-4 py-2">
            <span>IdeaEuropa</span>
            <a>https://www.ideaeuropa.it</a>
            <p>
              Idea Europa Aps is a third sector body, experts in carrying out
              assistance activities for established and soon-to-be established
              associations, from the drafting of their statute, to the drafting
              of regional, national and European projects, to the creation of
              cultural and training events.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <h2
            className="container-heading-green"
            style={{ fontSize: 25, fontWeight: 700 }}
          >
            Agreements
          </h2>
        </div>
        <div className="row" style={{ backgroundColor: "#f2f8f1", padding : "3rem 15rem" }}>
          <div className="col-3 partners-row">
            <img src={uim} alt="Person" />
          </div>
          <div className="col-7 d-flex flex-column gap-4 py-2">
            <span>UIM</span>
            <a>http://www.uim.it</a>
            <p>
              The UIM, Union of Italians in the World, is the association that
              deals with the protection of the rights and interests of Italians
              in the world, and offers their support and assistance in the
              social, political and social security fields.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
