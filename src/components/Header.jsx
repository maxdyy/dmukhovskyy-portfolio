import React, { Component } from "react"
import $ from 'jquery'
import 'materialize-css'
import { dmukhovskyy_en } from "../localization/content.json"

const { header } =dmukhovskyy_en
const {
  name,
  surname,
  about,
  smart,
  blog,
  projects,
  contact
} = header

class Header extends Component {
  render() {
    const { navigation } = this.props
    const {
      _about,
      _smart,
      _projects,
      _blog,
      _contact
    } = navigation
    return (
      <header className="main-nav">
        <div className="main-nav-wrapper">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">
                <div className="avatar">
                  <img src="avatar.png" alt="Maksym" />
                  <h1 className="name">
                    <span>{name}</span><span>{surname}</span>
                  </h1>
                </div>
              </a>
              <a href="javascript:void(0)" data-activates="mobile-demo" className="button-collapse">
                <i className="fas fa-bars"></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a className="modal-trigger" href={_about}>{about}</a></li>
                <li><a href={_smart}>{smart}</a></li>
                <li><a href={_projects}>{projects}</a></li>
                <li><a href={_blog}>{blog}</a></li>
                <li><a href={_contact}>{contact}</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a className="modal-trigger close-click" href={_about}>{about}</a></li>
                <li><a className="close-click" href={_smart}>{smart}</a></li>
                <li><a className="close-click" href={_blog}>{blog}</a></li>
                <li><a className="close-click" href={_projects}>{projects}</a></li>
                <li><a className="close-click" href={_contact}>{contact}</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
  componentDidMount() {
    $(".button-collapse").sideNav()
    $('.close-click').on('click', function() {
      $('side-nav').sideNav('hide')
    })
  }
}

export default Header