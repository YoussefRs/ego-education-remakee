import React, { useState } from "react";
import n1 from "../../assets/news/uniitalo.webp";
import s2 from "../../assets/news/unitalo.webp";
import n4 from "../../assets/news/unijaguaribe2.webp";
import n5 from "../../assets/news/VillaVehia.webp";
import i1 from "../../assets/news/i1.webp";
import i2 from "../../assets/news/i2.webp";
import i3 from "../../assets/news/i3.webp";
import team from "../../assets/news/team.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./news.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function News() {
  const slides = [
    {
      image: team,
      subImage: i1,
      title:
        "Mattia Di Tommaso Appointed as New Head of the Department of Political Sciences, International Relations and Development Cooperation",
      author: "A.Daniele Pallotta",
      date: "January 22, 2024",
      category: "Education",
      sub: "Expanding Academic Horizons: Mattia's Vision for New Educational Programs",
      p1: "eGO Education is pleased to announce that Mattia Di Tommaso has been appointed as the new head of our Department of Political Sciences, International Relations and Development Cooperation. With his extensive expertise and visionary leadership, Mattia is set to drive the department’s mission of delivering cutting-edge education and fostering global perspectives.",
      p2: "In his new role, Mattia will not only oversee the existing accredited programs—the MA in NGO Management and Leadership and the MSc in European Project Management—but he is also spearheading the development of three additional courses in the field. These innovative programs aim to expand our academic portfolio, address emerging trends, and equip students with the skills needed to navigate the complex landscape of international affairs and development.",
      p3: "Under Mattia’s guidance, the department is poised to enhance its reputation for excellence and to offer a broader range of specialized academic opportunities for students aspiring to lead in the public and nonprofit sectors.",
      p4: "For more details on our evolving academic offerings and initiatives, please keep following us.",
    },
    {
      image: s2,
      subImage: i2,
      title:
        "eGO Education and Italo-Brasileira Announce Strategic Academic Partnership",
      author: "A.Daniele Pallotta",
      date: "October 16, 2022",
      category: "Education",
      sub: "Partnership Agreement Ceremony Emphasizing Academic Excellence",
      p1: "eGO Education is proud to announce the signing of a strategic partnership with Italo-Brasileira, a distinguished Centro Universitario based in São Paulo, Brazil. This collaboration marks a significant milestone in expanding international academic opportunities and reinforcing global educational standards.",
      p2: "The agreement was formalized during a signing ceremony attended by eGO Education’s General Director, Rector, and Country Manager for Brazil, alongside their counterparts from Italo-Brasileira. The event highlighted the mutual commitment of both institutions to academic excellence and innovation in postgraduate education.",
      p3: "eGO Education, known for its online master’s degree programs that are recognized throughout the European Union and are easily validated in Commonwealth countries, will leverage this partnership to offer enhanced learning experiences and broaden its global footprint. The collaboration with Italo-Brasileira is expected to open new avenues for cross-cultural academic exchange, research, and professional development, benefiting students and professionals across continents.",
      p4: "This exciting alliance underlines our commitment to fostering accessible, high-quality education on a global scale. We look forward to the many opportunities this partnership will create for our academic communities in Brazil, Europe, and beyond.",
    },
    {
      image: n4,
      subImage: i3,
      title:
        "eGO Education Explores New Collaboration Opportunities with UniJaguaribe",
      author: "A.Daniele Pallotta",
      date: "September 04, 2022",
      category: "Education",
      sub: "Strengthening Academic Collaboration for Innovation",
      p1: "eGO Education is excited to announce a recent high-level meeting with UniJaguaribe, a respected Faculdade from Ceará, Brazil. The discussion focused on exploring collaborative paths that could lead to innovative academic partnerships and enriched educational experiences.",
      p2: "During the meeting, representatives from both institutions engaged in productive dialogue about potential joint initiatives, including research projects, academic exchanges, and the development of innovative learning programs. This collaborative spirit reflects our commitment to breaking new ground in higher education and broadening the scope of opportunities available to students and professionals.",
      p3: "This initial discussion marks an important step towards establishing a fruitful long-term partnership, and we are enthusiastic about the possibilities that lie ahead. As we continue to build bridges with esteemed academic institutions like UniJaguaribe, we remain dedicated to our mission of providing accessible, high-quality education worldwide.",
      p4: "Stay tuned for further updates on our evolving collaboration and the exciting opportunities it will bring for our academic communities.",
    },
    {
      image: n1,
      subImage: i1,
      title:
        "eGO Education and Fabio Porta Forge Strategic Partnership in São Paulo",
      author: "A.Daniele Pallotta",
      date: "June 13, 2023",
      category: "Education",
      sub: "Expanding Academic Opportunities for the Italian Community in Latin America",
      p1: "eGO Education is pleased to announce a new strategic partnership with Fabio Porta, a distinguished member of the Italian Chambers representing the foreign constituency for Latin America and President of UIM (Unione Italiani nel Mondo) in Brazil—the leading association of Italians abroad. The partnership was formalized during a meeting in São Paulo, in collaboration with Alessandro Lupo, marking an important milestone in strengthening educational and cultural ties.",
      p2: "This collaboration aims to enhance academic outreach and create new opportunities that connect eGO Education’s internationally recognized online master&#39;s degree programs with the vibrant Italian community in Latin America. By combining expertise and shared values, both parties are committed to fostering innovative initiatives that will benefit students, professionals, and the broader community.",
      p3: "We look forward to the exciting developments and collaborative projects that will emerge from this partnership, reinforcing our commitment to accessible, high-quality education and global cultural exchange.",
    },
    {
      image: n5,
      subImage: i1,
      title:
        "eGO Education Shines at QS Ranking Event for Latin America in Vila Velha",
      author: "A.Daniele Pallotta",
      date: "October 02, 2022",
      category: "Education",
      sub: "QS Quacquarelli Symonds: A Global Leader in Higher Education Analysis",
      p1: "eGO Education is proud to have participated in the prestigious QS Ranking event for Latin America, held at the Universidade Vila Velha in Vila Velha. The event provided an excellent platform for academic institutions to showcase their commitment to quality education and innovation.",
      p2: "QS Quacquarelli Symonds (QS) is one of the world’s leading higher education analysts, renowned for its influential QS World University Rankings and comprehensive insights into global academic trends. Founded in 1990 by Nunzio Quacquarelli, QS has grown into a truly international organization with offices across Europe, Asia, and the Americas. Their innovative approach and commitment to data- driven excellence have made QS a trusted partner for institutions worldwide, helping shape educational strategies and connect diverse stakeholders through events, conferences, and research reports.",
      p3: "A special thank you goes to Leonardo Andrade, Business Development Manager at QS, whose invaluable collaboration helped ensure the success of the event. His expertise and support played a key role in facilitating engaging discussions and networking opportunities among participants.",
      p4: "Our involvement at this event reinforces eGO Education’s commitment to enhancing global academic standards and expanding our reach within the international education community. We are excited to continue building relationships with esteemed partners like QS and furthering our mission to provide accessible, high-quality online master’s degree programs recognized throughout the European Union and beyond.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-next">&#10095;</div>,
    prevArrow: <div className="slick-prev">&#10094;</div>,
  };

  const { t } = useTranslation();
  const { subtitle, specialWord } = t("home.news");

  return (
    <div className="container mb-5 mt-5">
      <div className="row ">
        <h1
          className="container-title text-black fw-bold "
          style={{ fontFamily: '"Gotham Light"' }}
        >
          {subtitle}{" "}
          <span style={{ color: "rgb(4, 102, 53)" }}>{specialWord} </span>
        </h1>

        <div className="col-12 col-lg-6  pb-0 slider_container">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="carousel-item">
                <Link to={`/news/${slide.title}`} state={slide}>
                  <div className="card border-0 rounded-0 text-light overflow zoom">
                    <div className="position-relative">
                      <div className="ratio_left-cover-1 image-wrapper">
                        <a href={`/news/${slide.title}`}>
                          <img
                            className="img-fluid w-100"
                            id="big_img"
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                          />
                        </a>
                      </div>
                      <div class="overlay border">
                        <div class="mb-2">
                          <a
                            class="badge badge-primary border  text-uppercase font-weight-semi-bold p-2"
                            style={{
                              backgroundColor: "#046635",
                              marginRight: "1rem",
                            }}
                            href={`/news/${slide.title}`}
                          >
                            {slide.category}
                          </a>
                          <a class="text-black" href={`/news/${slide.title}`}>
                            {slide.date}
                          </a>
                        </div>
                        <a
                          class="h4 m-0 text-black text-uppercase fw-bold"
                          href={`/news/${slide.title}`}
                        >
                          {slide.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="col-12 col-lg-6 s_img pl-md-1">
          <div className="row">
            {slides.slice(1, 5).map((slide, index) => (
              <div key={index} className="col-6 ">
                <Link to={`/news/${slide.title}`} state={slide}>
                  <div className="card border-0 rounded-0 text-white overflow zoom">
                    <div className="position-relative">
                      <div className="ratio_right-cover-2 image-wrapper">
                        <a href={`/news/${slide.title}`}>
                          <img
                            className="img-fluid"
                            src={slide.image}
                            alt={slide.category}
                          />
                        </a>
                      </div>
                      <div
                        className=" p-2 p-lg-3 b-0 w-100 border"
                        style={{ fontFamily: "Gotham Light" }}
                      >
                        <a
                          className="p-1 text-white border badge badge-primary rounded-0"
                          style={{ backgroundColor: "#046635" }}
                          href={`/news/${slide.title}`}
                        >
                          {slide.category}
                        </a>
                        <a href={`/news/${slide.title}`}>
                          <h2
                            className="h6 text-black my-1"
                            style={{ fontFamily: "Gotham Light" }}
                          >
                            {slide.title}
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
