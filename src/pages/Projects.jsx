import React, { Component } from "react";
import axios from "axios";
import { setStorage, getStorage } from "../database/sessionStorage";
import MASTER_ENDPOINT from "../database/endpoint";
import { PROJECT_QUERY } from "../database/query";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: {
        _about: "/#modal",
        _smart: "/#smart",
        _projects: "#",
        _blog: "/blog",
        _contact: "/contact"
      },
      publishedProjects: [],
      projectsAreReady: false
    };
  }

  componentDidMount() {
    const sessionSavedProjects = getStorage("dmukhovskyyProjects");
    if (!sessionSavedProjects) {
      const self = this;
      axios({
        url: MASTER_ENDPOINT,
        method: `post`,
        data: {
          query: PROJECT_QUERY
        }
      }).then(result => {
        const { projects } = result.data.data;
        const publishedProjects = projects.filter(
          project => project.status === "PUBLISHED"
        );
        const projectsAreReady = true;
        self.setState({ publishedProjects, projectsAreReady });
        setStorage("dmukhovskyyProjects", publishedProjects);
      });
    } else {
      const projectsAreReady = true;
      this.setState({
        publishedProjects: sessionSavedProjects,
        projectsAreReady
      });
    }
  }

  render() {
    const { navigation, publishedProjects, projectsAreReady } = this.state;
    if (projectsAreReady) {
      const projectItems = publishedProjects.map(projectData => (
        <ProjectItem key={projectData.id} projectData={projectData} />
      ));

      return (
        <div className="projects">
          <Menu navigation={navigation} />
          <section className="section-projects">
            <ul
              className="collapsible popout projects-container"
              data-collapsible="expandable"
            >
              {projectItems}
            </ul>
          </section>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}
