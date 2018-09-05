import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";

const MASTER_ENDPOINT =
  "https://api-euwest.graphcms.com/v1/cjjvpziwn0ehw01d06ai7cygj/master";

const BLOG_POST_QUERY = id => {
  return `
    {
      blogPost(where: {
        id: "${id}"
      }) {
        status
          id
          createdAt
          postThumbnail {
            handle
            width
            height
          }
          postImage {
            handle
            width
            height
          }
          postType
          postTitle
          postText
          readtime
      }
    }`;
};

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogTitle: "bog title",
    };
  }

  componentDidMount() {
    const id = this.props.router.query.id;
    const self = this;
    axios({
      url: MASTER_ENDPOINT,
      method: `post`,
      data: {
        query: BLOG_POST_QUERY(id)
      }
    }).then(result => {
      console.log(result)
      if (result) {
        self.setState({ blogTitle: result.data.data.blogPost.postTitle });
      }
    });
  }

  render() {
    return <div>
        {" "}
        <h1>{this.state.blogTitle}</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{" "}
      </div>;
  }
}

export default withRouter(Blog);
