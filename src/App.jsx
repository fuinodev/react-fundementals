import { useState } from "react";

const App = () => {
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );

  const saveName = () => {
    localStorage.setItem("name", name);
  };

  return (
    <div>
      <h1>Your Name</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={saveName}>
        Save
      </button>

      <p>Hello, {name}</p>
    </div>
  );
};

export default App;