import React from "react";
import "./Student.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import { CalendarIcon, EmailIcon, NameIcon } from "../enrollment/Svgs";

function Student() {
  return (
    <div>
    
      <SubHeader
        title="Student Office"
        path={[{ url: "/", label: "Home" }]}
        current="Student Office"
      />

      <form id="feedback" action="">
        <div className="pinfo">Name: </div>

        <div className="form-group">
          <div className="coll-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user">
                  <NameIcon width={"77%"} />
                </i>
              </span>
              <input
                name="name"
                placeholder="John Doe"
                className="form-control"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="pinfo">Surname:</div>
        <div className="form-group">
          <div className="coll-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-envelope">
                  <NameIcon width={"77%"} />
                </i>
              </span>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="john.doe@yahoo.com"
              />
            </div>
          </div>
        </div>
        <div className="pinfo">Email:</div>
        <div className="form-group">
          <div className="coll-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-globe">
                  <EmailIcon width={"77%"} />
                </i>
              </span>
              <input
                name="URL"
                placeholder="https://google.com"
                className="form-control"
                type="url"
              />
            </div>
          </div>
        </div>
        <div className="pinfo">Year of Enrolment:</div>
        <div className="form-group">
          <div className="coll-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-globe">
                  <CalendarIcon width={"77%"} />
                </i>
              </span>
              <input
                name="URL"
                placeholder="https://google.com"
                className="form-control"
                type="url"
              />
            </div>
          </div>
        </div>

        <div className="pinfo">Certificate Required</div>

        <div className="form-group">
          <div className="coll-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-heart">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#046635"
                    className="bi bi-mortarboard-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                  </svg>
                </i>
              </span>
              <select className="form-control" id="rate">
                <option >Select a certificate..</option>
                <option value="1star">MSc in Information Security</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pinfo">Message:</div>

        <div className="form-group">
          <div className="coll-md-4 inputGroupContainer">
            <div className="input-group">
              <textarea className="form-control" id="review" rows="3"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="btn ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Student;
