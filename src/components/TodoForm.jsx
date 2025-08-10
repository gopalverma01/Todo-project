import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add} className="relative w-full max-w-md mx-auto">
  {/* The glowing animated border */}
  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 blur animate-glow"></div>

  {/* Actual form container */}
  <div className="relative flex rounded-lg bg-white bg-opacity-90 border border-transparent shadow-md overflow-hidden">
    <input
      type="text"
      placeholder="Write Todo..."
      className="flex-grow px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-lg font-medium"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
    <button
      type="submit"
      className="px-5 py-3 bg-green-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
    >
      Add
    </button>
  </div>
  
</form>


  );
}

export default TodoForm;