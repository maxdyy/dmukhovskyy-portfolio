import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
import Footer from '../components/footer'


class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsNavigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _blog: "#",
        _projects: "./projects",
        _contact: "./contact"
      }
    }
  }

  render() {
    const { projectsNavigation } = this.state
    return (
      <div className="blog">
        <Header navigation={projectsNavigation} />
          <div>
            
          </div>
        <Footer />
      </div>
    )
  }
}

const contactssEntry = document.getElementById('react-blogPage')
ReactDOM.render(<BlogPage />, contactssEntry)