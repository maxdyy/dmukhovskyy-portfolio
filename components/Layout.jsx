import { Component } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import HeadX from "./HeadX";
import Menu from "./Menu";
import Footer from "./Footer";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props
    };
  }

  render() {
    const { navigation } = this.state;
    return (
      <div className="root-layout">
        <HeadX />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/47621770"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Menu navigation={navigation} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
