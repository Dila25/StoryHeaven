import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Nav />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
