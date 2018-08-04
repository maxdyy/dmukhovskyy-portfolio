import React, { Component } from "react";
import { dmukhovskyy_en } from "../localization/content.json";

const { frontEndText, backEndText, visitBtnText } = dmukhovskyy_en.projects;

class ProjectItem extends Component {
  render() {
    const {
      id,
      projectTitle,
      projectFrontEnd,
      projectBackEnd,
      projectDescription,
      projectUrl,
      headerBackground,
      projectLogo
    } = this.props.projectData;

    const projectStyle = {
      icon: {
        backgroundImage: `url(${projectLogo.url})`
      },
      gradient: {
        backgroundImage: `${headerBackground}`
      }
    };
    return (
      <li className="project-item">
        <div
          className={`collapsible-header header-${id}`}
          style={projectStyle.gradient}
        >
          <div
            className={`project-icon icon-${id}`}
            style={projectStyle.icon}
          />
          <span className="project-title">{projectTitle}</span>
        </div>
        <div className="collapsible-body">
          <div className="project-stack">
            <div className="stack-front">
              <span className="stack-title">{frontEndText}</span>
              <span className="stack-desc">{projectFrontEnd}</span>
            </div>
            <div className="stack-back">
              <span className="stack-title">{backEndText}</span>
              <span className="stack-desc">{projectBackEnd}</span>
            </div>
          </div>
          <hr className={`hr-${id}`} style={projectStyle.gradient} />
          <div className="project-desc">
            <span>{projectDescription}</span>
          </div>
          <div className="project-btn-wrapper">
            <a
              className="waves-effect waves-light btn project-btn"
              href={`${projectUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {visitBtnText}
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default ProjectItem;
