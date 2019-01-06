import React, { Component } from 'react';
import './App.css';
import FeedButton from "./components/FeedButton/FeedButton";


class App extends Component {
  handleClick = () => {

  };

  render() {
    return (
      <div className="App">
        <FeedButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
