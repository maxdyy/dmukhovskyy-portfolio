import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { setStorage, getStorage } from "./database/sessionStorage";
import MASTER_ENDPOINT from "./database/endpoint";
import { BLOG_QUERY } from "./database/query";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacts from "./pages/Contact";
import Error404 from "./pages/Error404";
import Success from "./pages/Success";

const createBlogRoutes = publishedBlogPosts => {
  if (publishedBlogPosts) {
    return publishedBlogPosts.map((blogPost, key) => (
      <Route
        exact
        path={`/${blogPost.postTitle.split(" ").join("-")}`}
        render={() => <BlogPost blogData={blogPost} />}
        key={key}
      />
    ));
  } else {
    return null;
  }
};

class WebApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publishedBlogPosts: []
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

        self.setState({ publishedBlogPosts });
        setStorage("dmukhovskyyBlogPosts", publishedBlogPosts);
      });
    } else {
      this.setState({
        publishedBlogPosts: sessionSavedBlogPosts
      });
    }
  }

  render() {
    const { publishedBlogPosts } = this.state;
    const blogPostRoutes = createBlogRoutes(publishedBlogPosts);
    return (
      <div className="WebApp">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/blog" component={Blog} exact />
          {blogPostRoutes}
          <Route path="/contact" component={Contacts} exact />
          <Route path="/success" component={Success} exact />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default WebApp;
