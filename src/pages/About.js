import { Link } from "react-router";


function About() {
  return (
    <>
      <main>
        <h1>About Page</h1>
         <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
      </main>
    </>
  );
}

export default About;
