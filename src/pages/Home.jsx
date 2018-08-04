import React, { Component } from "react";
import $ from "jquery";
import Menu from "../components/Menu";
import MasterHead from "../components/MasterHead";
import Modal from "../components/Modal";
import Smart from "../components/Smart";
import Tech from "../components/Tech";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: {
        _about: "#modal1",
        _smart: "#smart",
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
        <MasterHead />
        <Modal />
        <Smart />
        <Tech />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    $(".scrollspy").scrollSpy();
  }
}
