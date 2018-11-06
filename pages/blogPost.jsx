import { Component } from "react";
import ReactMarkdown from "react-markdown";
import GraphImg from "graphcms-image";
import axios from "axios";
import MASTER_ENDPOINT from "../database/endpoint";
import { BLOG_POST_QUERY } from "../database/query";
import { dmukhovskyy_en } from "../localization/content.json";
import Layout from "../components/Layout";
import SeoTags from "../components/SeoTags";
import Random404 from "../components/Random404";

const { items } = dmukhovskyy_en.random404;

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

  static async getInitialProps({ query }) {
    const res = await axios({
      url: MASTER_ENDPOINT,
      method: "post",
      data: {
        query: BLOG_POST_QUERY(query.slug)
      }
    }).then(result => result.data);
    const randomItem = Object.keys(items)[
      Math.floor(Math.random() * Object.keys(items).length)
    ];
    const randomEmoji = items[randomItem];
    return {
      blogPostData: res.data.blogPost,
      randomItem: randomItem,
      randomEmoji: randomEmoji
    };
  }

  render() {
    const { navigation } = this.state;
    if (this.props.blogPostData) {
      const {
        postTitle,
        postText,
        postImage,
        createdAt
      } = this.props.blogPostData;
      const creationTime = createdAt.split("T")[0];
      return (
        <Layout navigation={navigation}>
          <SeoTags seoData={this.props.blogPostData} />
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
        </Layout>
      );
    } else {
      const { navigation } = this.state;
      const { randomItem, randomEmoji } = this.props;
      return (
        <div className="Error404">
          <Layout navigation={navigation}>
            <Random404 randomItem={randomItem} randomEmoji={randomEmoji} />
          </Layout>
        </div>
      );
    }
  }
}
