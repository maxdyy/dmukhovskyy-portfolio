import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: {
        _home: "/",
        _smart: "/#smart",
        _projects: "/projects",
        _blog: "/blog",
        _contact: "#"
      }
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Dmukhovskyy - Contact</title>
        </Helmet>
        <Menu navigation={this.state.navigation} />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}
