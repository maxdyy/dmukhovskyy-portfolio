import React, { Component } from "react";
import Menu from "../components/Menu";
import FormSuccess from "../components/FormSuccess";
import Footer from "../components/Footer";

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: {
        about: false,
        _home: "/",
        _smart: "/#smart",
        _projects: "/projects",
        _blog: "/blog",
        _contact: "/contact"
      }
    };
  }

  render() {
    return (
      <div className="succes">
        <Menu navigation={this.state.navigation} />
        <FormSuccess />
        <Footer />
      </div>
    );
  }
}
