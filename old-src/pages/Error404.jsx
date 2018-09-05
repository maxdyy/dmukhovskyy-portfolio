import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";
import Random404 from "../components/Random404";
import Footer from "../components/Footer";

export default class Error404 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: {
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
      <div>
        <Helmet>
          <title>Dmukhovskyy - Page Not Found</title>
        </Helmet>
        <Menu navigation={this.state.navigation} />
        <Random404 />
        <Footer />
      </div>
    );
  }
}
