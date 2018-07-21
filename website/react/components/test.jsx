import React, { Component } from "react"
import ReactDOM from 'react-dom';

const testText = "React!"
const testEntry = document.getElementById('react-testEntry')


class Test extends Component {
  render() {
    return (
      <div className="react-test">
        {testText}
      </div>
    )
  }
}

ReactDOM.render(<Test />, testEntry)