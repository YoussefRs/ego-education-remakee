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
        <div class="pinfo">Name: </div>

        <div class="form-group">
          <div class="coll-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user">
                  <NameIcon width={"77%"} />
                </i>
              </span>
              <input
                name="name"
                placeholder="John Doe"
                class="form-control"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="pinfo">Surname:</div>
        <div class="form-group">
          <div class="coll-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-envelope">
                  <NameIcon width={"77%"} />
                </i>
              </span>
              <input
                name="email"
                type="email"
                class="form-control"
                placeholder="john.doe@yahoo.com"
              />
            </div>
          </div>
        </div>
        <div class="pinfo">Email:</div>
        <div class="form-group">
          <div class="coll-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-globe">
                  <EmailIcon width={"77%"} />
                </i>
              </span>
              <input
                name="URL"
                placeholder="https://google.com"
                class="form-control"
                type="url"
              />
            </div>
          </div>
        </div>
        <div class="pinfo">Year of Enrolment:</div>
        <div class="form-group">
          <div class="coll-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-globe">
                  <CalendarIcon width={"77%"} />
                </i>
              </span>
              <input
                name="URL"
                placeholder="https://google.com"
                class="form-control"
                type="url"
              />
            </div>
          </div>
        </div>

        <div class="pinfo">Certificate Required</div>

        <div class="form-group">
          <div class="coll-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-heart">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#046635"
                    class="bi bi-mortarboard-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                  </svg>
                </i>
              </span>
              <select class="form-control" id="rate">
                <option >Select a certificate..</option>
                <option value="1star">MSc in Information Security</option>
              </select>
            </div>
          </div>
        </div>

        <div class="pinfo">Message:</div>

        <div class="form-group">
          <div class="coll-md-4 inputGroupContainer">
            <div class="input-group">
              <textarea class="form-control" id="review" rows="3"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" class="btn ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Student;
