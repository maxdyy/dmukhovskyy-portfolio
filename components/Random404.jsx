import { Component } from "react";
import Link from "next/link";
import Button from "./Button";
import { dmukhovskyy_en } from "../localization/content.json";

const { message, button } = dmukhovskyy_en.random404;

const Create404 = (randomItem, randomEmoji) => {
  return (
    <div className="section-404__wrapper">
      <h1>
        4 <span className={`ec ${randomEmoji}`} /> 4
      </h1>
      <h4 className="section-404__message">
        {message} {randomItem}!
      </h4>
      <div className="section-404__message2">
        <Link passHref replace href={"/"}>
          <a>
            <Button text={button} type="button" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default class Random404 extends Component {
  render() {
    const { randomItem, randomEmoji } = this.props;
    return (
      <section className="section-404">
        {Create404(randomItem, randomEmoji)}
      </section>
    );
  }
}
