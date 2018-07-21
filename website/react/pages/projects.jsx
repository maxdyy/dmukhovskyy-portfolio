import React, { Component } from "react"
import ReactDOM from 'react-dom';
import Header from '../components/header'
import Footer from '../components/footer'

const projectsEntry = document.getElementById('react-projectsPage')


class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects">
        <Header />
          <section className="section-projects">
            <ul className="collapsible popout projects-container" data-collapsible="expandable"></ul>
          </section>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<ProjectsPage />, projectsEntry)