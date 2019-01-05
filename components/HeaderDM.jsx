import React from "react";
import Link from "next/link";
import { Menu, Input } from "antd";
import { dmukhovskyy_en } from "../localization/content.json";

const { header } = dmukhovskyy_en;
const { name, surname, search, linkedIn, github, twitter } = header;
const Search = Input.Search;

const HeaderDM = () => (
  <Menu mode="light" style={{ lineHeight: "64px" }} className="dm-menu">
    <Link passHref replace href="/">
      <a className="dm-menu__logo">
        <div className="dm-menu__avatar">
          <img src="/static/img/avatar.png" alt="Maksym" />
          <h1 className="dm-menu__name">
            <span>{name}</span>
            <span>{surname}</span>
          </h1>
        </div>
      </a>
    </Link>
    <Search
      placeholder={search}
      onSearch={value => console.log(value)}
      style={{ width: 300 }}
      enterButton
    />
    <div className="dm-menu__social">
      <a
        className="dm-menu__social__item"
        target="_blank"
        rel="noopener noreferrer"
        href={github.link}
      >
        <i className="fab fa-github" />
      </a>
      <a
        className="dm-menu__social__item"
        target="_blank"
        rel="noopener noreferrer"
        href={linkedIn.link}
      >
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        className="dm-menu__social__item"
        target="_blank"
        rel="noopener noreferrer"
        href={twitter.link}
      >
        <i className="fab fa-twitter" />
      </a>
    </div>
  </Menu>
);

export default HeaderDM;
