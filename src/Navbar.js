import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "70px",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="title">Movie-App</div>
          <div>
            <img alt="cart icon" />
            <span>0</span>
          </div>
        </div>
      </>
    );
  }
}
