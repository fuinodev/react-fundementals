import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus"; 
import Greetings from "./components/Greetings";

const App = () => {
  return(
    <>
   <Weather />

   <UserStatus loggedIn={true} isAdmin={true} />

   <Greetings timeOfday="ads"/>
     </>
  );
};

export default App;