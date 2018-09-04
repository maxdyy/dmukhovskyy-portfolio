import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import GraphImg from "graphcms-image";
import $ from "jquery";
import hljs from "highlight.js";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { getStorage } from "../database/sessionStorage";
import MASTER_ENDPOINT from "../database/endpoint";
import { BLOG_POST_QUERY } from "../database/query";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const findSavedPost = (id, sessionSavedBlogPosts) => {
  if (id && sessionSavedBlogPosts) {
    return sessionSavedBlogPosts.find(post => post.id === id);
  } else {
    return false;
  }
};

const makeCodeBeautiful = () => {
  $(document).ready(() => {
    $("pre code").each((i, block) => {
      hljs.highlightBlock(block);
    });
  });
};

const createTwitterThumb = handle =>
  `https://media.graphcms.com/resize=width:450/${handle}`;

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
      },
      blogPost: null,
      blogPostsIsReady: false,
      notFound: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const sessionSavedBlogPosts = getStorage("dmukhovskyyBlogPosts");
    const savedPost = findSavedPost(id, sessionSavedBlogPosts);

    if (savedPost) {
      const blogPostsIsReady = true;
      this.setState({ blogPost: savedPost, blogPostsIsReady });
      makeCodeBeautiful();
    } else if (
      (sessionSavedBlogPosts && !savedPost) ||
      !sessionSavedBlogPosts
    ) {
      const self = this;
      axios({
        url: MASTER_ENDPOINT,
        method: `post`,
        data: {
          query: BLOG_POST_QUERY(id)
        }
      }).then(result => {
        const { blogPost } = result.data.data;
        blogPost
          ? self.setState({
              blogPost,
              blogPostsAreReady: true
            })
          : self.setState({ notFound: true });
        makeCodeBeautiful();
      });
    } else {
      this.setState({ notFound: true });
    }
  }
  render() {
    const { navigation, blogPost, notFound } = this.state;
    if (blogPost) {
      const { postTitle, postText, postImage, createdAt } = blogPost;
      console.log(postImage);
      const creationTime = createdAt.split("T")[0];
      return (
        <div>
          <Helmet>
            <title>Dmukhovskyy - {postTitle}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@maxdyy" />
            <meta name="twitter:title" content={postTitle} />
            <meta
              name="twitter:image"
              content={createTwitterThumb(postImage.handle)}
            />
          </Helmet>
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
              <div className="blog-post__createdAt">
                <span>Published: &nbsp;</span>
                <span>{creationTime}</span>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    } else if (notFound) {
      return <Redirect to="/404" />;
    } else {
      return (
        <div>
          <Menu navigation={navigation} />
          <div className="section-blog">
            <div className="section-blog__container">
              <Loader />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
