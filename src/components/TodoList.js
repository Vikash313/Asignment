import React from 'react'

function TodoList(props) {

   
    return (
        <div>
            <li>
                <button onClick={() => {props.onSelect(props.id)}}>X</button> {props.text} </li>
        </div>
    )
}

export default TodoList
