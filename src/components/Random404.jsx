import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Loader from "./Loader";
import { dmukhovskyy_en } from "../localization/content.json";

const { message, items, button } = dmukhovskyy_en.random404;

const Create404 = () => {
  const randomItem = Object.keys(items)[
    Math.floor(Math.random() * Object.keys(items).length)
  ];

  return (
    <div className="section-404__wrapper">
      <h1>
        4 <span className={`ec ${items[randomItem]}`} /> 4
      </h1>
      <h4 className="section-404__message">
        {message} {randomItem}!
      </h4>
      <div className="section-404__message2">
        <Link to="/">
          <Button text={button} type="button" />
        </Link>
      </div>
    </div>
  );
};

export default class Random404 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: true
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ searching: false });
      this.timer = 0;
    }, 2000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = 0;
    }
  }

  render() {
    return (
      <section className="section-404">
        {this.state.searching ? <Loader /> : <Create404 />}
      </section>
    );
  }
}
