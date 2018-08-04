import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacts from "./pages/Contact";
import Error404 from "./pages/Error404";

class WebApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="WebApp">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            {}
            <Route path="/contact" component={Contacts} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default WebApp;
