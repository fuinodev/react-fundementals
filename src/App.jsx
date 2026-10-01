const App = () => {
  const myName = "FuinoDev";
  const myFriends = ["Wes", "Wino", "Sui"];
  const multiply = (a, b) => a * b;

  return (
    <div>
      <h1>2 + 2 = {2 + 2}</h1>
      <p>Hello, my name is {myName}</p>
      <p>My friends are: {myFriends.join(", ")}</p>

      <ul className="my-list">
        <li>Wes</li>
        <li>Wino</li>
        <li>Sui</li>
      </ul>

      <p>4 x 4 = {multiply(4, 4)}</p>
    </div>
  );
};

export default App;