const ValidPassword = () => <h1>Your password is Valid</h1>
const InvalidPassword = () => <h1>Your password is Invalid</h1>

const Passwword = ({ isValid}) => {
  if (isValid) {
    return <ValidPassword />

  } else;

  return <InvalidPassword />
};

const App = () => {
  return (
    <div>
     <h1><Passwword isValid={true}/> </h1>
    </div>
  );
};

export default App;