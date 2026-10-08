import { useState } from "react";

const LiveNameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Live Name Input</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <h2>Hello, {name}!</h2>
    </div>
  );
};

export default LiveNameInput;