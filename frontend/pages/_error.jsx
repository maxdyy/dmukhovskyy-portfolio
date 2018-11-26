import { Component } from "react";
import Random404 from "../components/Random404";
import Layout from "../components/Layout";
import { dmukhovskyy_en } from "../localization/content.json";

const { items } = dmukhovskyy_en.random404;

export default class e404 extends Component {
  static getInitialProps() {
    const randomItem = Object.keys(items)[
      Math.floor(Math.random() * Object.keys(items).length)
    ];
    const randomEmoji = items[randomItem];
    return { randomItem, randomEmoji };
  }

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
    const { navigation } = this.state;
    const { randomItem, randomEmoji } = this.props;
    return (
      <div className="Error404">
        <Layout navigation={navigation}>
          <Random404 randomItem={randomItem} randomEmoji={randomEmoji} />
        </Layout>
      </div>
    );
  }
}
