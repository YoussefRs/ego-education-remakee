import React from "react";
import "./TDetails.css";
import { useLocation } from "react-router-dom";

function TDetails() {
  const location = useLocation();
  const member = location.state;

  return (
    <div className="p-container">
      <div className="profile-container">
        <div className="profile-image">
          <img src={member.imgSrc} alt="Profile Image" />
          <div className="profile-info">
            <p id="name">
              {member.name}
              {/* <span id="email">shashank12@mnnit.ac.in</span> */}
            </p>
            <p id="designation_">{member.role}</p>
            <p id="designation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              voluptatum fugit iure iste facere tempora itaque.
            </p>
            <div className="social-links d-flex align-items-center gap-4">
              <a className="fa fa-fw fa-facebook" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#046635"
                  className="bi bi-envelope-at-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
              </a>
              <a className="fa fa-fw fa-twitter" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#046635"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="profile_right">
          <div className="profile-description">
            <h2 className="d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#046635"
                className="bi bi-pen"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
              </svg>{" "}
              Description
            </h2>
            <p id="designation">
              {member.description
                ? member.description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum fugit iure iste facere tempora itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum fugit iure iste facere tempora itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum fugit iure iste facere tempora itaque."}
            </p>
          </div>
          <div className="profile-description">
            <h2 className="d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#046635"
                className="bi bi-briefcase"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
              </svg>
              Experience
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel arcu sit amet turpis aliquet fermentum. Suspendisse potenti.
            </p>
            <ul>
              <li>Experience 1</li>
              <li>Experience 2</li>
              <li>Experience 3</li>
              <li>Experience 4</li>
              <li>Experience 5</li>
            </ul>
          </div>
          <div className="cv-dnw">
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TDetails;
