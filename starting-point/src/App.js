import "./App.css";
import TodoList from "./TodoList";
import React, { useState, useRef } from "react";

function App() {
  const todoNameRef = useRef()
  const [todos, setTodos] = useState([]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref="todoNameRef" type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
