import { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, push, onValue, remove, update } from "firebase/database";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const todoRef = ref(db, "todos");

    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      setTodos(data || {});
    });
  }, []);

  const addTodo = () => {
    if (task.trim() === "") return;

    push(ref(db, "todos"), {
      text: task,
    });

    setTask("");
  };

  const deleteTodo = (id) => {
    remove(ref(db, `todos/${id}`));
  };

  const updateTodo = () => {
    update(ref(db, `todos/${editId}`), {
      text: task,
    });

    setEditId(null);
    setTask("");
  };

  return (
    <div className="container">
      <h1>🔥 Firebase CRUD Todo</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {editId ? (
          <button onClick={updateTodo}>Update</button>
        ) : (
          <button onClick={addTodo}>Add</button>
        )}
      </div>

      <ul>
        {Object.keys(todos).map((id) => (
          <li key={id}>
            {todos[id].text}

            <div>
              <button
                className="edit"
                onClick={() => {
                  setEditId(id);
                  setTask(todos[id].text);
                }}
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteTodo(id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;