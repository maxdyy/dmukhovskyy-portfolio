import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigation: {
        _about: "./index#modal",
        _smart: "./index#smart",
        _blog: "./blog",
        _projects: "./projects",
        _contact: "./contact"
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header navigation={this.state.navigation} />
      </div>
    );
  }
}

export default App
