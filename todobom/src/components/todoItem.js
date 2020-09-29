import React from 'react';
import './todo.css';

function TodoItem(props) {
    const onDone = () => {
        props.completeTodo(props.todo.id)
    }

    const onRemove = () =>{
        props.removeTodo(props.todo.id)
    }
  return (
    <div className="todoItem" style={{display: "flex", textDecoration: props.todo.completed ? "line-through" : null}}>
        <input type="checkbox" className="done" onClick={onDone}></input>
        <li id={props.todo.id}>{props.todo.task}</li>
        <button className="deleteTodo" onClick={onRemove}>X</button>
    </div>
  );
}

export default TodoItem;
