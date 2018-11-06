import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </div>
    );
  }
}
