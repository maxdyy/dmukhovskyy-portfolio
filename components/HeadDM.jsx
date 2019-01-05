import React from "react";
import Head from "next/head";
import NProgressStyle from "nprogress/nprogress.css";
import antdStyle from "antd/dist/antd.min.css";

const HeadDM = () => (
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

    <title>Front End Tech - Maksym Dmukhovskyy</title>
    <meta
      name="description"
      content="Front End articles, all about new web technologies, programming and coding."
    />
    <meta
      name="keywords"
      content="HTML, CSS, JavaScript, React, jQuery, ES6, SASS, Web Development"
    />
    <meta name="author" content="Maksym Dmukhovskyy" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@maxdyy" />
    <meta name="twitter:title" content="Front End Tech - Maksym Dmukhovskyy" />
    <meta
      name="twitter:description"
      content="Front End articles, all about new web technologies, programming and coding"
    />
    <meta
      name="twitter:image"
      content="https://media.graphcms.com/resize=width:450/l6gAfPqJSea8KG7sh4hr"
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-124236618-1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments); }gtag('js', new Date());gtag('config', 'UA-124236618-1');`
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `(function (d, w, c) { (w[c] = w[c] || []).push(function () { try { w.yaCounter47621770 = new Ya.Metrika2({ id: 47621770, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }); } catch (e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2");`
      }}
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="/static/assets/emoji.min.css" />
    <style dangerouslySetInnerHTML={{ __html: NProgressStyle }} />
    <style dangerouslySetInnerHTML={{ __html: antdStyle }} />

    <link rel="stylesheet" href="/static/assets/atom-one-dark.css" />
    <script src="/static/assets/highlight.pack.js" />
  </Head>
);

export default HeadDM;
