import React, { Component } from "react";
import $ from "jquery";

export default class Modal extends Component {
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <div className="modal-profile">
            <div className="modal-avatar">
              <div className="avatar-img-wrapper">
                <img src="avatar.png" alt="Maksym" />
              </div>
              <div className="modal-name-contacts">
                <div className="modal-name">
                  <span>Maksym Dmukhovskyy</span>
                </div>
                <div className="modal-contacts">
                  <div>
                    <span className="contact-title">EMAIL</span>
                    <span className="contact-value">
                      <a href="mailto:dm.maksym@gmail.com?subject=MYY:%20&body=Hi%20Maksym,">
                        dm.maksym@gmail.com
                      </a>
                    </span>
                  </div>
                  <div>
                    <span className="contact-title">CURRENT LOCATION</span>
                    <span className="contact-value">
                      <a
                        href="https://www.google.it/maps/place/Milan,+Metropolitan+City+of+Milan/@45.4628328,9.1076927,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!8m2!3d45.4642035!4d9.189982?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Milan, ITALY
                      </a>
                    </span>
                  </div>
                  <div>
                    <span className="contact-title">SOCIAL</span>
                    <span className="contact-value">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/maxdyy"
                      >
                        <i className="fab first fa-github" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://codepen.io/maxdyy"
                      >
                        <i className="fab fa-codepen" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/maxdyy"
                      >
                        <i className="fab fa-twitter-square" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/maxdyy"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="modal-about">
              <h2>About Me</h2>
              <p>
                I’m a Front-end Developer with one year of commercial
                experience.
                <br />
                <br />
                Since turning my passion into a career, I’ve worked hard to
                learn and improve my skills.
                <br />
                During last year I’ve had great opportunities to work with big
                fashion brands and even participate at a well known fashion
                event as an on-field Front-end Developer.
                <br />
                <br />
                Today I'm thrilled more than ever to be a part of such an
                amazing industry.
              </p>
              <hr />
              <h2>Main Skills</h2>
              <p>
                JavaScript ES6 | ReactJS | jQuery | Webpack | Gulp.js | HTML5 |
                SASS | CSS3 | Responsive Design
              </p>
            </div>
            <div className="modal-close">
              {" "}
              <a
                href="#!"
                className="modal-action modal-close waves-effect waves-light btn"
              >
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    $(".modal").modal();
  }
}
