const Greetings = (props) => {
  return props.timeOfday === "morning" ? (
    <h1>Good morning</h1>
  ) : (
    <h1>Good afternoon</h1>
  );
};

export default Greetings;