import React, { Component } from "react"
import { dmukhovskyy_en } from "../../localization/content.json"

const { header } =dmukhovskyy_en
const {
  name,
  surname,
  about,
  smart,
  techStack,
  contacts,
  projects
} = header

class Header extends Component {
  render() {
    const { navigation } = this.props
    const {
      _about,
      _smart,
      _techStack,
      _contacts,
      _projects
    } = navigation
    return (
      <header className="main-nav">
        <div className="main-nav-wrapper">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">
                <div className="avatar">
                  <img src="images/avatar.png" alt="photo of Maksym" />
                  <h1 className="name">
                    <span>{name}</span><span>{surname}</span>
                  </h1>
                </div>
              </a>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="fas fa-bars"></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a className="modal-trigger" href={_about}>{about}</a></li>
                <li><a href={_smart}>{smart}</a></li>
                <li><a href={_techStack}>{techStack}</a></li>
                <li><a href={_contacts}>{contacts}</a></li>
                <li><a href={_projects}>{projects}</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a className="modal-trigger close-click" href={_about}>{about}</a></li>
                <li><a className="close-click" href={_smart}>{smart}</a></li>
                <li><a className="close-click" href={_techStack}>{techStack}</a></li>
                <li><a className="close-click" href={_contacts}>{contacts}</a></li>
                <li><a className="close-click" href={_projects}>{projects}</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header