import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <div className="row">
          <form className="col s8">
            <div className="row">
              <div className="input-field col s6">
                <input id="form_name" type="text" className="validate" />
                <label htmlFor="form_name">Name</label>
              </div>
              <div className="input-field col s6">
                <input id="form_email" type="email" className="validate" />
                <label htmlFor="form_email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
               <textarea id="form_message" className="materialize-textarea" data-length="120"></textarea>
               <label htmlFor="form_message">Message</label>
              </div>
            </div>
          </form>
        </div>
    )
  }
  componentDidMount() {
    $('input#input_text, textarea#textarea1').characterCounter();
  }
}

export default ContactForm
