import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    case "toggle":
     return state.map((task) =>
      task.id === action.id
     ? {...task, completed : !task.completed}
     : task
    );

    case "delete":
   return state.filter((task) => task.id !== action.id);


    default:
      return state;
  }
};

const ReducerTodoList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({
      type: "add",
      id: crypto.randomUUID(),
      text: input.trim(),
    });

    setInput("");
  };

  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
          <span
  style={{
    textDecoration: task.completed ? "line-through" : "none",
  }}
>
  {task.text}
</span>

 <button onClick={() => dispatch({ type: "toggle", id: task.id})}
  >
  {task.completed ? "Undo" : "Completed"}
</button>

          <button onClick={() => dispatch({ type: "delete", id: task.id})}>
  Delete
</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReducerTodoList;