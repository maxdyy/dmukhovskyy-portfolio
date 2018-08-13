import React, { Component } from "react";
import Button from "./Button";

class ContactForm extends Component {
  render() {
    return (
      <section className="contact-form">
        <div className="form-container">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify="true"
            action="/success/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-field form-name">
              <input
                name="name"
                id="form_name"
                type="text"
                className="validate"
              />
              <label htmlFor="form_name">Name</label>
            </div>
            <div className="input-field form-email">
              <input
                name="email"
                id="form_email"
                type="email"
                className="validate"
              />
              <label htmlFor="form_email">Email</label>
            </div>
            <div className="input-field form-message">
              <textarea
                name="message"
                id="form_message"
                className="materialize-textarea validate"
              />
              <label htmlFor="form_message">Message</label>
            </div>
            <div className="row">
              <div className="">
                <Button text="submit" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
