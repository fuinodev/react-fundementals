import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} />
  </div>
  );
};

export default App;