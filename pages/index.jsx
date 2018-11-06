import { Component } from "react";
import Layout from "../components/Layout";
import MasterHead from "../components/MasterHead";
import Modal from "../components/Modal";
import Smart from "../components/Smart";
import Tech from "../components/Tech";

export default class index extends Component {
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
    const { navigation } = this.state;
    return (
      <Layout navigation={navigation}>
        <MasterHead />
        <Modal />
        <Smart />
        <Tech />
      </Layout>
    );
  }

  componentDidMount() {
    $(".scrollspy").scrollSpy();
  }
}
