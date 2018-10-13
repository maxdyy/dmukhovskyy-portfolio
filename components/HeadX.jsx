import { Component } from "react";
import Head from "next/head";

export default class HeadX extends Component {
  render() {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/static/img/favicon-16x16.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/static/img/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/static/img/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/img/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/static/img/touch-icon-ipad-retina.png"
        />

        <title>Maksym Dmukhovskyy - Web Development</title>
        <meta
          name="description"
          content="Web Development articles, all about new web technologies, programming and coding."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, jQuery, ES6, SASS, Web Development"
        />
        <meta name="author" content="Maksym Dmukhovskyy" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@maxdyy" />
        <meta
          name="twitter:title"
          content="Maksym Dmukhovskyy - Web Development"
        />
        <meta
          name="twitter:description"
          content="Web Development articles, all about new web technologies, programming and coding."
        />
        <meta
          name="twitter:image"
          content="https://media.graphcms.com/resize=width:450/l6gAfPqJSea8KG7sh4hr"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-124236618-1"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/assets/materialize.min.css" />
        <link rel="stylesheet" href="/static/assets/emoji.min.css" />

        <script src="/static/assets/jquery-3.3.1.min.js" />
        <script src="/static/assets/materialize.min.js" />

        <link rel="stylesheet" href="/static/style/style.min.css" />
        <script src="/static/js/init.js" />
      </Head>
    );
  }
}
