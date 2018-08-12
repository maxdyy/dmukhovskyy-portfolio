import React, { Component } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default class Blog extends Component {
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
        <Menu navigation={this.state.navigation} />
        <div className="section-blog">
          <span>Blog</span>
        </div>
        <Footer />
      </div>
    );
  }
}
