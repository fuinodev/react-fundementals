import SimpleCounter from "./components/useState/SimpleCounter";
import LiveNameInput from "./components/useState/LiveNameInput";
import PasswordVisibility from "./components/useState/PasswordVisibility";

const App = () => {
  return (
    <div>
      <SimpleCounter />
      <LiveNameInput />
      <PasswordVisibility />
    </div>
  );
};

export default App;