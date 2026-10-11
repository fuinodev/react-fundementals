import SimpleCounter from "./components/SimpleCounter";
import LiveNameInput from "./components/LiveNameInput";
import PasswordVisibility from "./components/PasswordVisibility";
import ReducerCounter from "./components/useReducer/ReducerCounter";

const App = () => {
  return (
    <div>
      <PasswordVisibility />
      <SimpleCounter />
      <LiveNameInput />
      <ReducerCounter />
    </div>
  );
};

export default App;