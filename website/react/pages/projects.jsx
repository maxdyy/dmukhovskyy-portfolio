import React, { Component } from "react"
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Footer from '../components/footer'

const projectsEntry = document.getElementById('react-projectsPage')


class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsNavigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _techStack: "./index#tech",
        _contacts: "#contacts",
        _projects: "#"
      }
    };
  }

  render() {
    return (
      <div className="projects">
        <Header navigation={this.state.projectsNavigation} />
          <section className="section-projects">
            <ul className="collapsible popout projects-container" data-collapsible="expandable"></ul>
          </section>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<ProjectsPage />, projectsEntry)