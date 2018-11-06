import { Component } from "react";
import axios from "axios";
import MASTER_ENDPOINT from "../database/endpoint";
import { BLOG_QUERY } from "../database/query";
import Layout from "../components/Layout";
import BlogItem from "../components/BlogItem";

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
      }
    };
  }

  static async getInitialProps() {
    const res = await axios({
      url: MASTER_ENDPOINT,
      method: "post",
      data: {
        query: BLOG_QUERY
      }
    }).then(result => result.data);
    return { blogData: res.data.blogPosts };
  }

  render() {
    const { navigation } = this.state;
    const { blogData } = this.props;
    const blogItems = blogData.map(blogData => (
      <BlogItem key={blogData.id} blogData={blogData} />
    ));

    return (
      <Layout navigation={navigation}>
        <div className="section-blog">
          <div className="section-blog__container">{blogItems}</div>
        </div>
      </Layout>
    );
  }
}
