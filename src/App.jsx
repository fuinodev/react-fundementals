import SimpleCounter from "./components/SimpleCounter";
import LiveNameInput from "./components/LiveNameInput";
import PasswordVisibility from "./components/PasswordVisibility";

const App = () => {
  return (
    <div>
      <PasswordVisibility />
      <SimpleCounter />
      <LiveNameInput />
    </div>
  );
};

export default App;