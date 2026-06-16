import { Link, Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        <Link to="/items/item-1">
          <li>Item-1</li>
        </Link>
        <Link to="/items/item-2">
          <li>Item-2</li>
        </Link>
        <Link to="/items/item-3">
          <li>Item-3</li>
        </Link>
      </ul>
    </>
  );
}

export default Items;
// /items/mobile   /items/laptop
