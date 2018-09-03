import React, { Component } from "react";
import { Redirect } from "react-router";
import $ from "jquery";
import Button from "./Button";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      redirect: false
    };
  }

  validateFeedback = (name, message, email) => {
    if (!name) {
      $("#form_name").addClass("invalid");
    }
    if (!message) {
      $("#form_message").addClass("invalid");
    }
    if (!email) {
      $("#form_email").addClass("invalid");
    }
  };

  handleSubmit = e => {
    const { name, message, email } = this.state;
    if (!name || !message || !email) {
      this.validateFeedback(name, message, email);
      e.preventDefault();
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => {
          this.setState({ redirect: true });
        })
        .catch(error => alert(error));
      e.preventDefault();
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/success" />;
    }

    return (
      <section className="contact-form">
        <div className="form-container">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify="true"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-field form-name">
              <input
                name="name"
                id="form_name"
                type="text"
                className="validate"
                value={name}
                onChange={this.handleChange}
              />
              <label htmlFor="form_name">Name</label>
            </div>
            <div className="input-field form-email">
              <input
                name="email"
                id="form_email"
                type="email"
                className="validate"
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor="form_email">Email</label>
            </div>
            <div className="input-field form-message">
              <textarea
                name="message"
                id="form_message"
                className="materialize-textarea validate"
                value={message}
                onChange={this.handleChange}
              />
              <label htmlFor="form_message">Message</label>
            </div>
            <div className="row">
              <div>
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
