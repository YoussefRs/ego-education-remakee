import React from "react";
import "./Widgets.css";
import { useTranslation } from "react-i18next";

export default function InfoWidget({ course }) {
  const { t } = useTranslation();
  const { category, modules, duration, price } = t("widget.info");
  return (
    <div className="container course-info ">
      <div className="row">
        <div className="col d-flex align-items-center gap-2" style={{fontFamily : "Gotham"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
           fill="#046635"
            className="bi bi-bookmarks"
            viewBox="0 0 16 16"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
          </svg>
          {category} 
        </div>
        <div className="col">
          <span style={{fontFamily : "Gotham Book"}}>{course?.category} </span>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center gap-2" style={{fontFamily : "Gotham"}}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#046635"
            className="bi bi-card-checklist"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
          </svg>
          {modules} 
        </div>
        <div className="col" >
          <span style={{fontFamily : "Gotham Book"}}>{course?.totalModules} </span>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center gap-2" style={{fontFamily : "Gotham"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#046635"
            className="bi bi-pen-fill"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
          </svg>
          ECTS 
        </div>
        <div className="col">
          <span style={{fontFamily : "Gotham Book"}}>{course?.totalEtc} </span>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center gap-2" style={{fontFamily : "Gotham"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#046635"
            className="bi bi-tags-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
          </svg>
          {price} 
        </div>
        <div className="col">
          <span style={{fontFamily : "Gotham"}}>{course?.price}</span>
        </div>
      </div>
    </div>
  );
}
