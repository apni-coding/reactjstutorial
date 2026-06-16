import { Link, Outlet } from "react-router";
import Navbar from "../components/Navbar";


function Items() {
  return (
    <>
    {/* <Navbar /> */}
      <main>
        <h1>Items Page</h1>
         <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </main>
      <Outlet />
    </>
  );
}

export default Items;
// /items/mobile   /items/laptop