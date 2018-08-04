import React, { Component } from "react";
import InitTextScrumble from "../js/textScrumble";

export default class MasterHead extends Component {
  render() {
    return (
      <section className="section-masterhead">
        <div className="masterhead-wrapper">
          <div className="masterhead-text">
            <span>Web Development is </span>
            <span className="scramble-text" />
          </div>
          <hr />
          <div className="masterhead-text-2">
            <span>And it's a lot more.</span>
            <span>
              Personally I'm pumped about Web Development and Web Design.
            </span>
            <span>My name is Maksym, and this is my story.</span>
            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="masterhead-round-bottom" />
      </section>
    );
  }

  componentDidMount() {
    InitTextScrumble();
  }
}
