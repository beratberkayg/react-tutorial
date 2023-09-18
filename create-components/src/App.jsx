import { useState } from "react";

import "./App.css";

import Name from "./components/name";
import Job from "./components/job";
import Text from "./components/text";

function App() {
  return (
    <>
      <div className="container">
        <Name />
        <Job />
        <Text />
      </div>
    </>
  );
}

export default App;
