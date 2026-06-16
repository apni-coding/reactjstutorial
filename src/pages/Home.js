import { Link } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    {/* <Navbar /> */}
      <main>
        <h1>Home Page</h1>
        {/* <a href="/about">About</a> */}
        <Link to="/about">About</Link>
        <Link to="/items">Items</Link>
      </main>
    </>
  );
}

export default Home;
