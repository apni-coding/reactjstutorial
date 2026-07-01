import Hero from "./pages/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/courses/Courses";
import { Route, Routes } from "react-router";
import Details from "./pages/details/Details";
import Learn from "./pages/learn/Learn";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Hero />
      <Courses /> */}
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Details />} />
          <Route path="/learn/:courseId" element={<Learn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
