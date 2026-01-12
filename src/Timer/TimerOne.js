import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();

    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("TimerOne shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("TimerOne getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
  }

  render() {
    console.log("TimerOne Render")
    return <h1>Timer</h1>;
  }
}
