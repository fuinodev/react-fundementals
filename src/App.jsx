import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Person name="FuinoDev " age={19} />
       <Product name="iPhone" price="$1500" />
    </div>
  );    
};

export default App;