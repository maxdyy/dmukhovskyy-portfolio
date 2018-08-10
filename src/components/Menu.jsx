import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "materialize-css";
import { dmukhovskyy_en } from "../localization/content.json";

const { header } = dmukhovskyy_en;
const { name, surname, home, about, smart, blog, projects, contact } = header;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { home: this.props.navigation.about ? about : home };
  }

  render() {
    const { navigation } = this.props;
    const { _home, _smart, _projects, _blog, _contact, about } = navigation;

    const smartLink = about ? (
      <a href={_smart}>{smart}</a>
    ) : (
      <Link to={_smart}>{smart}</Link>
    );

    const smartLinkMob = about ? (
      <a className="close-click" href={_smart}>
        {smart}
      </a>
    ) : (
      <Link to={_smart} className="close-click">
        {smart}
      </Link>
    );

    const showModal = () => {
      $(".modal").modal("open");
    };

    return (
      <header className="main-nav">
        <div className="main-nav-wrapper">
          <nav>
            <div className="nav-wrapper">
              <Link className="brand-logo" to="">
                <div className="avatar">
                  <img src="avatar.png" alt="Maksym" />
                  <h1 className="name">
                    <span>{name}</span>
                    <span>{surname}</span>
                  </h1>
                </div>
              </Link>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                }}
                data-activates="mobile-demo"
                className="button-collapse"
              >
                <i className="fas fa-bars" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link onClick={showModal} to={_home}>
                    {this.state.home}
                  </Link>
                </li>
                <li>{smartLink}</li>
                <li>
                  <Link to={_projects}>{projects}</Link>
                </li>
                <li>
                  <Link to={_blog}>{blog}</Link>
                </li>
                <li>
                  <Link to={_contact}>{contact}</Link>
                </li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li>
                  <Link className="close-click" onClick={showModal} to={_home}>
                    {this.state.home}
                  </Link>
                </li>
                <li> {smartLinkMob}</li>
                <li>
                  <Link className="close-click" to={_projects}>
                    {projects}
                  </Link>
                </li>
                <li>
                  <Link to={_blog} className="close-click">
                    {blog}
                  </Link>
                </li>
                <li>
                  <Link className="close-click" to={_contact}>
                    {contact}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
  componentDidMount() {
    $(".button-collapse").sideNav();
    $(".close-click").on("click", function() {
      $("side-nav").sideNav("hide");
    });
  }
}

export default Menu;
