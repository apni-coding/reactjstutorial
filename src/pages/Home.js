import { Link } from "react-router";

function Home() {
  return (
    <>
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
