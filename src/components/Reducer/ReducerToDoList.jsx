import { useReducer, useState } from "react";
import { Plus, Check, Undo2, Trash2 } from "lucide-react";
import "./ReducerTodolist.css";

// Reducer function
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
          ? { ...task, completed: !task.completed }
          : task
      );

    case "delete":
      return state.filter(
        (task) => task.id !== action.id
      );

    default:
      return state;
  }
};

// Main component
const ReducerTodoList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  // Add task
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
    <div className="todo-container">
      <h1>My To-Do List</h1>

      {/* Input Section */}
      <div className="todo-input-group">
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="Enter a task"
        />

        <button
          className="todo-add-btn"
          type="button"
          onClick={handleAdd}
          aria-label="Add task"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Task List */}
      <ul className="todo-list">
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>

            {/* Task Text */}
            <span
              className="todo-text"
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {task.text}
            </span>

            {/* Complete / Undo Button */}
            <button
              className="todo-complete-btn"
              type="button"
              onClick={() =>
                dispatch({
                  type: "toggle",
                  id: task.id,
                })
              }
              aria-label={
                task.completed
                  ? "Undo completion"
                  : "Complete task"
              }
            >
              {task.completed ? (
                <Undo2 size={20} />
              ) : (
                <Check size={20} />
              )}
            </button>

            {/* Delete Button */}
            <button
              className="todo-delete-btn"
              type="button"
              onClick={() =>
                dispatch({
                  type: "delete",
                  id: task.id,
                })
              }
              aria-label={`Delete ${task.text}`}
            >
              <Trash2 size={20} />
            </button>

          </li>
        ))}
      </ul>

      {/* Empty State */}
      {tasks.length === 0 && (
        <p className="todo-empty">
          No tasks yet. Add your first task!
        </p>
      )}

      {/* Task Counter */}
      <p className="todo-counter">
        {tasks.filter((task) => task.completed).length}
        {" "}of{" "}
        {tasks.length} tasks completed
      </p>
    </div>
  );
};

export default ReducerTodoList;
