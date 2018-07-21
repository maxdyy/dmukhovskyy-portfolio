import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <header className="main-nav">
        <div className="main-nav-wrapper">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">
                <div className="avatar">
                  <img src="images/avatar.png" alt="photo of Maksym" />
                  <h1 className="name">
                    <span>Maksym</span>
                    <span>Dmukhovskyy</span>
                  </h1>
                </div>
              </a>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="fas fa-bars"></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a className="modal-trigger" href="./index#modal1">About</a>
                </li>
                <li>
                  <a href="./index#smart">S.M.A.R.T.</a>
                </li>
                <li>
                  <a href="./index#tech">Tech Stack</a>
                </li>
                <li>
                  <a href="#contacts">Contacts</a>
                </li>
                <li className="project-menu">
                  <a href="#">Projects</a>
                </li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li>
                  <a className="modal-trigger close-click" href="./index#modal1">About</a>
                </li>
                <li>
                  <a className="close-click" href="./index#smart">S.M.A.R.T.</a>
                </li>
                <li>
                  <a className="close-click" href="./index#tech">Tech Stack</a>
                </li>
                <li>
                  <a className="close-click" href="#contacts">Contacts</a>
                </li>
                <li className="project-menu">
                  <a className="close-click" href="#">Projects</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header