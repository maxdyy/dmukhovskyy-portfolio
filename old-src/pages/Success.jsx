import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <title>Dmukhovskyy - Contact Success</title>
        </Helmet>
        <Menu navigation={this.state.navigation} />
        <FormSuccess />
        <Footer />
      </div>
    );
  }
}
