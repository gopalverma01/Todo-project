import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
   <div className="relative rounded-xl">
  {/* Glowing animated border */}
  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 blur animate-glow"></div>

  {/* Your existing todo card with backdrop blur and padding */}
  <div
    className={`relative flex items-center rounded-xl px-5 py-3 gap-x-4 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.02] ${
      todo.completed
        ? "bg-gradient-to-r from-green-300/50 to-green-500/30"
        : "bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-purple-500/30"
    }`}
  >
    {/* Checkbox */}
    <input
      type="checkbox"
      className="cursor-pointer w-5 h-5 accent-blue-500"
      checked={todo.completed}
      onChange={toggleCompleted}
    />

    {/* Todo Text */}
    <input
      type="text"
      className={`border-none outline-none w-full bg-transparent rounded-lg text-lg tracking-wide font-medium ${
        todo.completed ? "line-through text-gray-300" : "text-white"
      } ${isTodoEditable ? "bg-white/10 px-2" : ""}`}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
    />

    {/* Edit / Save Button */}
    <button
      className="inline-flex w-9 h-9 rounded-full justify-center items-center bg-white/20 hover:bg-white/40 transition-colors duration-300 text-white"
      onClick={() => {
        if (todo.completed) return;
        if (isTodoEditable) {
          editTodo();
        } else setIsTodoEditable((prev) => !prev);
      }}
      disabled={todo.completed}
      title={isTodoEditable ? "Save" : "Edit"}
    >
      {isTodoEditable ? "💾" : "✏️"}
    </button>

    {/* Delete Button */}
    <button
      className="inline-flex w-9 h-9 rounded-full justify-center items-center bg-red-400/30 hover:bg-red-500/50 transition-colors duration-300 text-white"
      onClick={() => deleteTodo(todo.id)}
      title="Delete"
    >
      🗑️
    </button>
  </div>
</div>


  );
}

export default TodoItem;