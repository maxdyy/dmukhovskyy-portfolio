import { Component } from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

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
    const { navigation } = this.state;
    return (
      <Layout navigation={navigation}>
        <ContactForm />
      </Layout>
    );
  }
}
