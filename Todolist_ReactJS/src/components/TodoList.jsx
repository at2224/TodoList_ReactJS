import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props

    return (
        // use {} to write JS code else html
        <ul className='main'>
            {/* react .map function to get each element in a list and map index to each */}
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key = {todoIndex}>
                        <p> {todo} </p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
