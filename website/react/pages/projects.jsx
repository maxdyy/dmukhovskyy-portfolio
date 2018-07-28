import React, { Component } from "react"
import ReactDOM from 'react-dom'
import axios from "axios"
import { setStorage, getStorage } from '../../utils/sessionStorage'
import MASTER_ENDPOINT from '../../graphQL/endpoint'
import PROJECT_QUERY from '../../graphQL/query'
import Header from '../components/header'
import Footer from '../components/footer'
import ProjectItem from '../components/projectItem'

class ProjectsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsNavigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _techStack: "./index#tech",
        _projects: "#",
        _contacts: "./contacts"
      },
      publishedProjects: [],
      projectsAreReady: false
    }
  }

  componentDidMount() {
    const sessionSavedProjects = getStorage("dmukhovskyyProjects")
    if (!sessionSavedProjects) {
      const self = this
      axios({
        url: MASTER_ENDPOINT,
        method: `post`,
        data: {
          query: PROJECT_QUERY
        }
      }).then(result => {
        const { projects } = result.data.data
        const publishedProjects = projects.filter(
          project => project.status === "PUBLISHED"
        )
        const projectsAreReady = true
        self.setState({ publishedProjects, projectsAreReady })
        setStorage("dmukhovskyyProjects", publishedProjects)
      })
     } else {
      const projectsAreReady = true
      this.setState({ publishedProjects: sessionSavedProjects, projectsAreReady })
      console.log("coming from session storage :)")
    }
  }

  render() {
    const { projectsNavigation, publishedProjects, projectsAreReady } = this.state
    if(projectsAreReady) {
      const projectItems = publishedProjects.map(
        projectData => <ProjectItem key={projectData.id}  projectData={projectData} />
      )

      return (
        <div className="projects">
          <Header navigation={projectsNavigation} />
            <section className="section-projects">
              <ul className="collapsible popout projects-container" data-collapsible="expandable">
                {projectItems}
              </ul>
            </section>
          <Footer />
        </div>
      )
    } else {
      return null
    }
  }
}

const projectsEntry = document.getElementById('react-projectsPage')
ReactDOM.render(<ProjectsPage />, projectsEntry)