import React from "react";
import { Link } from "react-router";

export default function Laptop() {
  return (
    <div>
      <main>
        <h1>Laptop Page</h1>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
      </main>
    </div>
  );
}
