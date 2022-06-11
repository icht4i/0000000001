import React, { useState, useEffect, useRef } from 'react'
import { useTodoLayerValue } from './context/TodoContext'
import TodoList from "./components/TodoList";
import "./App.css"

function App() {
  const [{ todos }] = useTodoLayerValue();
  const [content, setContent] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content && content.length < 1) return;
  }

  return (
    <div className='container'>
      <h1>aslmmmm</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="todo-input" onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={inputRef} />
        <button className="todo-button">
          ekle
        </button>
      </form>

      <TodoList todos={todos} />
    </div>)
}




export default App;