import React, { Component } from "react";
import Particles from "react-particles-js";
import particles from "../js/particles";

export default class Smart extends Component {
  render() {
    return (
      <section id="smart" className="section-smart scrollspy">
        <div id="fade-gradient-in" />
        <div className="smart-inner-wrapper">
          <Particles params={{ particles }} className="particles-js" />
          <div className="smart-inner-content">
            <h2>I believe in a S.M.A.R.T. approach</h2>
            <hr />
            <div className="smart-intro">
              <span>
                When starting a new project, the idea is to check it against
                these criteria to determine if it's appropriate and well
                developed.
              </span>
            </div>
            <div className="smart-cards-wrapper">
              <div className="smart-card specific">
                <div className="card-icon">
                  <i className="fa fa-2x fa-puzzle-piece" aria-hidden="true" />
                </div>
                <div className="card-title">
                  <span>Specific</span>
                </div>
                <div className="card-text">
                  <span>
                    Is the projects specific enough to convey the full scope?
                  </span>
                </div>
              </div>
              <div className="smart-card measurable">
                <div className="card-icon">
                  <i className="fa fa-2x fa-compress" aria-hidden="true" />
                </div>
                <div className="card-title">
                  <span>Measurable</span>
                </div>
                <div className="card-text">
                  <span>
                    Is there a clear indicator of when the project is complete?
                  </span>
                </div>
              </div>
              <div className="smart-card attainable">
                <div className="card-icon">
                  <i className="fa fa-3x fa-check" aria-hidden="true" />
                </div>
                <div className="card-title">
                  <span>Attainable</span>
                </div>
                <div className="card-text">
                  <span>Is the project possible?</span>
                </div>
              </div>
              <div className="smart-card realistic">
                <div className="card-icon">
                  <i className="fa fa-2x fa-thumbs-up" aria-hidden="true" />
                </div>
                <div className="card-title">
                  <span>Realistic</span>
                </div>
                <div className="card-text">
                  <span>
                    Is it possible to complete the project given the timeline
                    and resources?
                  </span>
                </div>
              </div>
              <div className="smart-card timely">
                <div className="card-icon">
                  <i
                    className="fa fa-2x fa-hourglass-half"
                    aria-hidden="true"
                  />
                </div>
                <div className="card-title">
                  <span>Timely</span>
                </div>
                <div className="card-text">
                  <span>
                    Will the project be useful if it is completed at its
                    deadline?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fade-gradient-out" />
      </section>
    );
  }
}
