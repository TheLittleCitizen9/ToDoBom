import React, { useEffect, useState } from 'react';
import Header from './components/header';
import './App.css';
import ToDoForm from './components/todoForm';
import ToDoList from './components/todoList';

function App() {

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos') || []))

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  })

  const addTodo = (todo) =>{
    setTodos([todo, ...todos])
  }

  const completeTodo = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return{
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Header></Header>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      <ToDoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}></ToDoList>
    </div>
  );
}

export default App;
