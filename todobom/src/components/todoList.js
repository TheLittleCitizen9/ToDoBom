import React from 'react'
import TodoItem from './todoItem'

function ToDoList(props){
    return(
        <ul>
            {props.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} completeTodo={props.completeTodo} removeTodo={props.removeTodo}></TodoItem>
            ))}
        </ul>
    )
}

export default ToDoList