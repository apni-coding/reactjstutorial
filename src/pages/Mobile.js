import React from "react";
import { Link } from "react-router";

export default function Mobile() {
  return (
    <div>
      <main>
        <h1>Mobile Page</h1>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
      </main>
    </div>
  );
}
