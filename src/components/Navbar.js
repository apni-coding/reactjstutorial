import { Link } from "react-router";


function Navbar() {
  return (
    <>
      <div className="nav">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/items">ITEMS</Link>
      </div>
    </>
  );
}

export default Navbar;
