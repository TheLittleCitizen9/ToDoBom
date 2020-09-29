import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './form.css';

function ToDoForm(props) {
    const [todo, setToDo] = useState({
        id: "",
        task: "",
        completed: false
    })

    const handleInput = e => {
        setToDo({...todo, task:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(todo.task.trim()){
            props.addTodo({...todo, id: uuid()})
            setToDo({...todo, task:""})
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input name="task" type="text" onChange={handleInput}></input>
        <button type="submit">Submit</button>
    </form>
  );
}

export default ToDoForm;
