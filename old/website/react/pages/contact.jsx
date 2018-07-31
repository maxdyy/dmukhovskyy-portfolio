import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'

class ContactsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsNavigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _projects: "./projects",
        _blog: "./blog",
        _contact: "#"
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
ReactDOM.render(<ContactsPage />, contactssEntry)