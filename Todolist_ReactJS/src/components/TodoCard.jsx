import React from 'react'

// type rfc and tab to auto create template functions
// Main function capital letter same name as file

export default function TodoCard(props) {
    const {children} = props 
    return (
        <li className = 'todoItem'>
            <div className='actionsContainer'>
                <i classname ="fa-solid fa-pen-to-square"></i>
                <i classname="fa-regular fa-trash-can"></i>
            </div>
        </li>
    )
}
