import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log("______________________________________");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("TimerOne shouldComponentUpdate");

    return nextProps.timerOne !== this.props.timerOne || nextState.time % 5 === 0;
  }

  getSnapshotBeforeUpdate() {
    console.log("TimerOne getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("TimerOne componentDidUpdate");
    console.log("______________________________________");
    if (prevProps.timerOne !== this.props.timerOne) {
      if (this.props.timerOne) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
  }
  // false   true
  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("TimerOne Render");
    console.log(this.state.time);
    return (
      <>
        <h1>
          Time Spent:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }
}
