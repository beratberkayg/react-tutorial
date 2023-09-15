import { useState } from "react";
import Text from "./components/text";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={decrement}>azalt</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>arttır</button>
    </>
  );
}

export default App;
