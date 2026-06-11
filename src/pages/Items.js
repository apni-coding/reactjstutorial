import { Link } from "react-router";


function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
         <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </main>
    </>
  );
}

export default Items;
