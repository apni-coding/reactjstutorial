import Hero from "./pages/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/courses/Courses";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Hero />
      <Courses /> */}
      <Routes>
        <Route path="/" element={<Nav />} >
            {/* <Route  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
