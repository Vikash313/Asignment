import React, { useState } from 'react'
import TodoList from "./TodoList"

function Todo() {
    const [ inputList, setInputList ] = useState("");
    const [ items, setItems ] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value);

    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("")
    }

    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
  }

    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text" placeholder="Enter your Item" value={inputList} onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>

            <ol>
              {items.map((Itemval, index) => {
                return <TodoList key={index} id={index} text = {Itemval}
                onSelect={deleteItems} />
              })}
            </ol>
        </div>
    )
}

export default Todo
