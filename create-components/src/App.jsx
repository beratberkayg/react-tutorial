import { useState } from "react";

import "./App.css";

import Name from "./components/name";
import Job from "./components/job";
import Text from "./components/text";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Name />
        <Job />
        <Text />
      </div>
    </>
  );
}

export default App;
