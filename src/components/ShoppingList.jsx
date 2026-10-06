import {useState} from "react";

const ShoppingList = () => {

    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    const addItem = () => {
         if (name === '' || quantity === '') {
  return;
   };
        
    const newItem = {  
      name: name,
      quantity: parseInt(quantity),
     };

     setItems((prevItems) => [...prevItems, newItem]);
     setName('');
     setQuantity('');

    
    };


  return (
    <div>
        <h1>Shopping List</h1>

        <input 
        type="text"
        value={name}
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        />

        <input 
        type="number"
        value={quantity}
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={addItem}>Add Item</button>

    
      <ul> 
        <h2>Your Product List: </h2>
         {items.map((item, index) => (
           <li key={index}>
        {item.name} - Quantity: {item.quantity}
           </li>
  ))}
      </ul>
    </div>
    
    

    
  );
};
export default ShoppingList;