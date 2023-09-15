import { useState } from "react";
import Text from "./components/text";

function App() {
  //let name = "react";

  const [name, setName] = useState("react");
  // const [değişken , değişkeni setlemek istediğin fonksiyon]

  const clickFunc = () => {
    console.log("click yapildi");
    setName("react-değisti");
  };
  return (
    <>
      <div onClick={clickFunc}>{name}</div>
    </>
  );
}

export default App;
