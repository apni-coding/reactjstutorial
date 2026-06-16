import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { Routes, Route } from "react-router";
import Mobile from "./pages/Mobile";
import Laptop from "./pages/Laptop";
function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      {/* <Navbar setPage={setPage}/>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />}>
          <Route path="mobile" element={<Mobile />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>
      </Routes>
      {/* Footer */}
    </>
  );
}

export default App;
