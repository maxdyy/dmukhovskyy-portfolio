import React, { Component } from "react";

export default class Tech extends Component {
  render() {
    return (
      <section id="tech" className="tech-stack scrollspy">
        <h2>Tech I use</h2>
        <hr />
        <div className="tech-intro">
          <span>
            I'm always looking forward to learn new technologies but at the same
            time I consider having solid basics a must for a developer.
          </span>
        </div>
        <div className="tech-wrapper">
          <div className="animation-wrapper-vscode">
            <div className="bubble m vscode" />
          </div>
          <div className="animation-wrapper-git">
            <div className="bubble s git" />
          </div>
          <div className="animation-wrapper-graphql">
            <div className="bubble m graphql" />
          </div>
          <div className="animation-wrapper-css">
            <div className="bubble m css" />
          </div>
          <div className="animation-wrapper-github">
            <div className="bubble s github" />
          </div>
          <div className="animation-wrapper-google-cloud">
            <div className="bubble m google-cloud" />
          </div>
          <div className="animation-wrapper-html">
            <div className="bubble s html" />
          </div>
          <div className="animation-wrapper-photoshop">
            <div className="bubble s photoshop" />
          </div>
          <div className="animation-wrapper-jQuery">
            <div className="bubble l jQuery" />
          </div>
          <div className="animation-wrapper-webpack">
            <div className="bubble s webpack" />
          </div>
          <div className="animation-wrapper-javascript">
            <div className="bubble m javascript" />
          </div>
          <div className="animation-wrapper-python">
            <div className="bubble m python" />
          </div>
          <div className="animation-wrapper-gulp">
            <div className="bubble s gulp" />
          </div>
          <div className="animation-wrapper-sass">
            <div className="bubble s sass" />
          </div>
          <div className="animation-wrapper-react">
            <div className="bubble l react" />
          </div>
        </div>
      </section>
    );
  }
}
