import React from 'react'
import { ToDoItem } from "./ToDoItem";

export const ToDos = (props) => {
    let mystyle = {
        minheight: "70vh"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h1 className="my-3">ToDos List</h1>

            {props.todos.length ===0?"No todos to Display":
            
            props.todos.map((todo)=>{
                return(
                <> 
                <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                </>
                )
            })}
        </div>
    )
}
