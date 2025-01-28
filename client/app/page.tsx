"use client"
import React, { useState, useEffect } from "react";
import AddBtn from "./buttons/addButton";
import CloseBtn from "./buttons/closeButton";
import ClearBtn from "./buttons/clearButton";
import './globals.css'

export default function Home() {
  // State for the input field
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<{ id: string; title: string }[]>([]);
  // Load todos from local storage
  useEffect(()=>{
      const storedTodos = localStorage.getItem("storedTodos") ?? "";
      if(storedTodos){
          const storedList = JSON.parse(storedTodos);
          setTodos(storedList);
      }
  },[])
  // Add to-do
  const addTodo = () => {
    if (todo) {
      // Create a new to-do object
      const newTodo = { id: new Date().getTime().toString(), title: todo };
      // Add the new to-do to the list
      setTodos([...todos, newTodo]);
      // Save to local storage
      localStorage.setItem("storedTodos", JSON.stringify([...todos, newTodo]));
      setTodo("");
    }
  };
  // Delete to-do
  const handleDelete = (todo:any)=>{
    // Filter out the to-do that matches the id
    const deleted = todos.filter((t)=>t.id !== todo.id);
    // Update the list
    setTodos(deleted);
    localStorage.setItem("storedTodos", JSON.stringify(deleted))
  }
  // Clear all to-dos
  const handleClear=()=>{
    setTodos([]);
    localStorage.removeItem("storedTodos");
  }

  return (
    <div className="body">
      <div className="flex-div">
        <div className=" input-div">
            <input
                name="todo"
                type="text"
                value={todo}
                placeholder="To-Do..."
                onChange={(e) => setTodo(e.target.value)}
                
                className="todo-input"
            />
        </div>
        <div>
            <AddBtn onClick={addTodo} />
        </div>
      </div>
      
      <div className="todo-info">
        You have
        {!todos.length
          ? " no to-dos"
          : todos.length === 1
          ? " 1 to-do"
          : todos.length > 1
          ? ` ${todos.length} to-dos`
          : null}
      </div>

      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <div className="todos">
            <div className="todos-text">
              <span className="">
                {todo.title}
              </span>
            </div>
              <div className="pt-1.5">
                <CloseBtn onClick ={()=> handleDelete(todo)}/>
              </div>
          </div>
        </React.Fragment>
      ))}

      {!todos.length ? null:(
        <div>
          <ClearBtn onClick={()=>handleClear()}/>
        </div>
      )}
    </div>
  );
}
