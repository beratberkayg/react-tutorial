import { useState } from "react";

function App() {
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);

  console.log(name);

  const targetFunc = (e) => {
    setName(e.target.value);
  };

  const clickFunc = () => {
    setData(name);
  };

  return (
    <>
      <input type="text" onChange={targetFunc} />
      <button onClick={clickFunc}>Tıkla</button>
      <div> {data}</div>
    </>
  );
}

export default App;
