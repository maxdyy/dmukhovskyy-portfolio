import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { dmukhovskyy_en } from "../localization/content.json";

const { message, button } = dmukhovskyy_en.formSuccess;

export default class FormSuccess extends Component {
  render() {
    return (
      <section className="section-success">
        <div className="section-success__message">
          <h5>
            {message}
            <span className="ec ec-ok-hand" />
          </h5>
        </div>
        <div className="section-success__button">
          <Link to="/">
            <Button text={button} type="button" />
          </Link>
        </div>
      </section>
    );
  }
}
