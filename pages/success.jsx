import { Component } from "react";
import Layout from "../components/Layout";
import FormSuccess from "../components/FormSuccess";

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
    const { navigation } = this.state;
    return (
      <Layout navigation={navigation}>
        <FormSuccess />
      </Layout>
    );
  }
}
