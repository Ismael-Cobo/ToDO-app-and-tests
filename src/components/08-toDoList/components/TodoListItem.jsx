import React from 'react'

export const TodoListItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <>
            <li
                className={`todo__item ${todo.done ? 'todo__done' : ''}`}
            >
                <p
                    className='todo__item__text'
                    onClick={() => handleToggle(todo.id)}
                >
                    {todo.desc}
                </p>
            </li>
            <button
                className='todo__item__delete'
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </>
    )
}
