import { useState } from "react";

const LiveNameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
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

      <h2>
        {name.trim() ? (
            <h2>Hello, {name.trim()}!</h2>
                    ) : (
           <h9>Please enter your name</h9>
         )}
      </h2>


    </div>
  );
};

export default LiveNameInput;