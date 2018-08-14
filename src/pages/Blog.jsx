import React, { Component } from "react";
import axios from "axios";
import { setStorage, getStorage } from "../database/sessionStorage";
import MASTER_ENDPOINT from "../database/endpoint";
import { BLOG_QUERY } from "../database/query";
import Menu from "../components/Menu";
import BlogItem from "../components/BlogItem";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

export default class Blog extends Component {
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
      publishedBlogPosts: [],
      blogPostsAreReady: false
    };
  }

  componentDidMount() {
    const sessionSavedBlogPosts = getStorage("dmukhovskyyBlogPosts");
    if (!sessionSavedBlogPosts) {
      const self = this;
      axios({
        url: MASTER_ENDPOINT,
        method: `post`,
        data: {
          query: BLOG_QUERY
        }
      }).then(result => {
        const { blogPosts } = result.data.data;
        const publishedBlogPosts = blogPosts.filter(
          blogPost => blogPost.status === "PUBLISHED"
        );
        const blogPostsAreReady = true;
        self.setState({ publishedBlogPosts, blogPostsAreReady });
        setStorage("dmukhovskyyBlogPosts", publishedBlogPosts);
      });
    } else {
      const blogPostsAreReady = true;
      this.setState({
        publishedBlogPosts: sessionSavedBlogPosts,
        blogPostsAreReady
      });
    }
  }

  render() {
    const { navigation, publishedBlogPosts, blogPostsAreReady } = this.state;
    const blogItems = publishedBlogPosts.map(blogData => (
      <BlogItem key={blogData.id} blogData={blogData} />
    ));
    return (
      <div>
        <Menu navigation={navigation} />
        <div className="section-blog">
          <div className="section-blog__container">
            {blogPostsAreReady ? blogItems : <Loader />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
