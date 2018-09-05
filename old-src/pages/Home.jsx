import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
        about: true,
        _home: "/",
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
        <Helmet>
          <title>Maksym Dmukhovskyy</title>
        </Helmet>
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
