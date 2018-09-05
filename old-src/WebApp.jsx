import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacts from "./pages/Contact";
import Error404 from "./pages/Error404";
import Success from "./pages/Success";

class WebApp extends Component {
  render() {
    return (
      <div className="WebApp">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/blog" component={Blog} exact />
          <Route
            path="/blog/:id"
            render={props => <BlogPost {...props} />}
            exact
          />
          <Route path="/contact" component={Contacts} exact />
          <Route path="/success" component={Success} exact />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default WebApp;
