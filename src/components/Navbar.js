import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink
          to="/"
          // style={({ isActive }) => ({
          //   color: isActive ? "blue" : "black",
          // })}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/items"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          ITEMS
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
