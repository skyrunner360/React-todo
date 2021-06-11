import React from 'react'

export const ToDoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            
        </div>
    )
}
