import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { Routes, Route } from "react-router";
function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      {/* <Navbar setPage={setPage}/>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </>
  );
}

export default App;
