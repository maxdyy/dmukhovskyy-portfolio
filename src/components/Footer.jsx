import React, { Component } from "react";
import { dmukhovskyy_en } from "../localization/content.json";

const { footer } = dmukhovskyy_en;
const {
  messageTitle,
  messageText,
  connectTitle,
  twitter,
  codepen,
  github,
  linkedIn,
  mail,
  copyright,
  gitRepo,
  license
} = footer;

class Footer extends Component {
  render() {
    return (
      <footer id="contacts" className="page-footer scrollspy">
        <div className="container">
          <div className="row">
            <div className="col l6 m8 s12 thanks">
              <h5 className="white-text">{messageTitle}</h5>
              <p className="grey-text text-lighten-4">
                {messageText}
                <span className="ec ec-wink" />
              </p>
            </div>
            <div className="col l4 m4 offset-l2 s12 connect">
              <h5 className="white-text">{connectTitle}</h5>
              <ul>
                <li>
                  <a
                    className="waves-effect waves-light btn"
                    href={twitter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" /> {twitter.user}
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn"
                    href={codepen.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-codepen" /> {codepen.user}
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn"
                    href={github.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" /> {github.user}
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn"
                    href={linkedIn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" /> {linkedIn.user}
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn" href={mail.link}>
                    <i className="fab fa-telegram-plane" /> {mail.user}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            {copyright}
            <a
              className="grey-text text-lighten-4 right"
              href={gitRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {license}
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
