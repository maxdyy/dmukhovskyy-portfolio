import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'

class ContactsPaje extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsNavigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _techStack: "./index#tech",
        _projects: "./projects",
        _contacts: "#"
      }
    }
  }

  render() {
    const { projectsNavigation } = this.state
    return (
      <div className="contacts">
        <Header navigation={projectsNavigation} />
        <section className="contact-form">
          <div className="container">
            <ContactForm />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

const contactssEntry = document.getElementById('react-contactsPage')
ReactDOM.render(<ContactsPaje />, contactssEntry)