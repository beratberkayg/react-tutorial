import { useState } from "react";

function App() {
  const [name, setName] = useState(null);

  console.log(name);
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default App;
