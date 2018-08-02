import * as $ from 'jquery';
import 'materialize-css';
import * as React from 'react';
import { default as localization } from "../localization/content.json";


const {
  name,
  surname,
  about,
  smart,
  blog,
  projects,
  contact
} = localization.dmukhovskyy_en.header;

export interface IHeaderProps {
  navigation: {
    _about: string;
    _smart: string;
    _projects: string;
    _blog: string;
    _contact: string;
  };
}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    const {      
      _about,
      _smart,
      _projects,
      _blog,
      _contact 
    } = this.props.navigation

    return (
      <header className="main-nav">
        <div className="main-nav-wrapper">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">
                <div className="avatar">
                  <img src="avatar.png" alt="photo of Maksym" />
                  <h1 className="name">
                    <span>{name}</span><span>{surname}</span>
                  </h1>
                </div>
              </a>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="fas fa-bars" />
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
    );
  }

  public componentDidMount() {
    $(".button-collapse").sidenav();
  }
}
