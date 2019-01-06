import React, { Component } from 'react';
import styles from './FeedButton.module.scss';


let t = 0, interval;


class FeedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }
  }

  timer = () => {
    this.setState({
      seconds: t++
    })
  }


  handleClick = () => {
    if (t===0) {
      this.setState({
        seconds: t++
      });
      interval = setInterval(this.timer, 1000);
    } else {
      clearInterval(interval);
      t = 0;
    }

  }

  render() {
    return (
      <div className={styles.thumper} onClick={this.handleClick}>
        <span className={styles.thumperValue}>
          {this.state.seconds}
        </span>
      </div>
    )
  }
}

export default FeedButton;
