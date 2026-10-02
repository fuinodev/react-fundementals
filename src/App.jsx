const App = () => {
  return <User
   img="https://avatars.githubusercontent.com/u/188583083?v=4"
   name="FuinoDev"
   age={19}
   hobbies= {["| Coding |", " Reading |", " Sleeping |"]}
    />
};

const User = (props) => {
  return (
  <div>
    <img src={props.img} alt={props.name} width={200}/>
    <h1>| {props.name}</h1>
    <h1>| {props.age} </h1>
    <h1>{props.hobbies}</h1>
  </div>
  );
};

export default App;