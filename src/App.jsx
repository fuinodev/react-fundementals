import { useState } from "react";

import Profile from "./components/Profile.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import ToDoList from "./components/ToDoList.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import ComponentOne from "./components/ComponentOne.jsx";
import ComponentTwo from "./components/ComponentTwo.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <WelcomeMessage />
      <ShoppingList />
      <ToDoList />
      <Profile />

      <ComponentOne
        count={count}
        onClickHandler={increment}
      />

      <ComponentTwo
        count={count}
        onClickHandler={decrement}
      />
    </div>
  );
};

export default App;