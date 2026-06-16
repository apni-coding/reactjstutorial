import { Link } from "react-router";
import Navbar from "../components/Navbar";


function About() {
  return (
    <>
    {/* <Navbar /> */}
      <main>
        <h1>About Page</h1>
         <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
      </main>
    </>
  );
}

export default About;
