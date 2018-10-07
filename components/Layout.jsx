import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";
import NProgressStyle from "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ...this.props
    }
  }
  
  render() {
    return (
      <div className="root-layout">
        <style dangerouslySetInnerHTML={{ __html: NProgressStyle }} />
        
      </div>
    )
  }
}
