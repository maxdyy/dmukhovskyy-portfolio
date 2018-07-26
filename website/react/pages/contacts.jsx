import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
import Footer from '../components/footer'

class ContactsPaje extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsNavigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _techStack: "./index#tech",
        _contacts: "#",
        _projects: "./projects"
      }
    }
  }

  render() {
    const { projectsNavigation } = this.state
    return (
      <div className="contacts">
        <Header navigation={projectsNavigation} />
        Hello React
        <Footer />
      </div>
    )
  }
}

const contactssEntry = document.getElementById('react-contactsPage')
ReactDOM.render(<ContactsPaje />, contactssEntry)