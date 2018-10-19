import { Component } from "react";
import axios from "axios";
import MASTER_ENDPOINT from "../database/endpoint";
import { PROJECT_QUERY } from "../database/query";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: {
        _home: "/",
        _smart: "/#smart",
        _projects: "/projects",
        _blog: "/blog",
        _contact: "/contact"
      }
    };
  }

  static async getInitialProps() {
    const res = await axios({
      url: MASTER_ENDPOINT,
      method: "post",
      data: {
        query: PROJECT_QUERY
      }
    }).then(result => result.data);
    return { projectsData: res.data.projects };
  }

  render() {
    const { navigation } = this.state;
    const { projectsData } = this.props;
    const projectItems = projectsData.map(projectData => {
      if (projectData.status === "PUBLISHED") {
        return <ProjectItem key={projectData.id} projectData={projectData} />;
      }
    });
    return (
      <Layout navigation={navigation}>
        <section className="section-projects">
          <ul
            className="collapsible popout projects-container"
            data-collapsible="expandable"
          >
            {projectItems}
          </ul>
        </section>
      </Layout>
    );
  }

  componentDidUpdate() {
    $(".collapsible").collapsible();
  }
}
