import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { dmukhovskyy_en } from "../localization/content.json";

const { message, items, message2, button } = dmukhovskyy_en.random404;

export default class Random404 extends Component {
  render() {
    const randomItem = Object.keys(items)[
      Math.floor(Math.random() * Object.keys(items).length)
    ];
    return (
      <section className="section-404">
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
      </section>
    );
  }
}
