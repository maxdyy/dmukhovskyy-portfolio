import { Component } from "react";
import Head from "next/head";

export default class SeoTags extends Component {
  render() {
    const {
      postTitle,
      postThumbnail,
      postDescription,
      postKeywords
    } = this.props.seoData;
    return (
      <Head>
        <title>{`Maksym Dmukhovskyy - ${postTitle}`}</title>
        <meta name="description" content={postDescription} />
        <meta name="keywords" content={postKeywords} />
        <meta name="author" content="Maksym Dmukhovskyy" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@maxdyy" />
        <meta
          name="twitter:title"
          content={`Maksym Dmukhovskyy - ${postTitle}`}
        />
        <meta name="twitter:description" content={postDescription} />
        <meta
          name="twitter:image"
          content={`https://media.graphcms.com/resize=width:450/${
            postThumbnail.handle
          }`}
        />
      </Head>
    );
  }
}
