import { useState } from "react";

const ToDoList = () => {

   const [todos, setTodos] = useState([]);
   const [inputValue, setInputValue] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim()){
        setTodos([...todos, inputValue  ])
        setInputValue("")
    }
   }

   const handleChange = e => {
    setInputValue(e.target.value);

   };
   
  return (
    <div>
        <h1>ToDo List hahah umay</h1>
    <form onSumbit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Input ka nga ng task umay"/>
        <button type="sumbit">haha input ka ng task luds</button>
    </form>

    <ul>
        {todos.map((todo, index) => (

     <li key="index">{todo}</li>

       ))}

    </ul>

    </div>
    
  );
};

export default ToDoList;