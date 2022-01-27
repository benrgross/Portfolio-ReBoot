import React from "react";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Wrapper>
        <NavBar />
        <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </Routes>
        </Router>
      </Wrapper>
    </>
  );
}

export default App;
