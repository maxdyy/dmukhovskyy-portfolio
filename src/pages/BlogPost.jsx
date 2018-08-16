import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import GraphImg from "graphcms-image";
import $ from "jquery";
import hljs from "highlight.js";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: {
        _home: "/",
        _smart: "/#smart",
        _projects: "/projects",
        _blog: "/blog",
        _contact: "/contact"
      }
    };
  }
  componentDidMount() {
    $(document).ready(function() {
      $("pre code").each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });
  }
  render() {
    const { navigation } = this.state;
    const { postTitle, postText, postImage } = this.props.blogData;
    return (
      <div>
        <Menu navigation={navigation} />
        <section className="blog-post">
          <div className="blog-post__wrapper">
            <div className="blog-post__image">
              <GraphImg
                className="blog-item__icon"
                image={postImage}
                maxWidth={950}
              />
            </div>
            <h1 className="blog-post__title">{postTitle}</h1>
            <div className="blog-post__text">
              <ReactMarkdown source={postText} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
