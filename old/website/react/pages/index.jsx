import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="index"></div>
    )
  }
}

const contactssEntry = document.getElementById('react-indexPage')
ReactDOM.render(<IndexPage />, contactssEntry)