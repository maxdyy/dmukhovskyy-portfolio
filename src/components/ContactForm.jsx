import React, { Component } from 'react'
import Button from './button'

class ContactForm extends Component {
  render() {
    return (
      <div className="row">
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          netlify="true"
          className="col s12"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="row">
            <div className="input-field col s6">
              <input name="name" id="form_name" type="text" className="validate" />
              <label htmlFor="form_name">Name</label>
            </div>
            <div className="input-field col s6">
              <input name="email" id="form_email" type="email" className="validate" />
              <label htmlFor="form_email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea name="message" id="form_message" className="materialize-textarea validate"></textarea>
              <label htmlFor="form_message">Message</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Button text="submit" type="submit"></Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm
