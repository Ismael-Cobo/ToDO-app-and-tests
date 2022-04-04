import { useReducer } from 'react'

import { AddToDo, FooterToDo, Header, ListToDo } from './components'
import { todoReducer } from './reducers/todoReducer'

import './App.css'
import { types } from './constant/const'



const initialState = [
    
]

export const ToDo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleDelete = (id) => {
        const action = {
            type: types.delete_todo,
            payload: id
        }
        dispatch(action)
    }

    const handleToggle = (id) => {

        const action = {
            type: types.done_todo,
            payload: id
        }
        dispatch(action)
    }

    const handleAddToDo = (newToDo) => {
    
        const action = {
            type: types.add_todo,
            payload: newToDo
        }

        dispatch(action)
    }

    
    return (
        <main className='todo__main'>
            <section className='container'>
                <Header />
                <AddToDo handleAddToDo={handleAddToDo} />
                <ListToDo todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
            </section>
            <FooterToDo />
        </main>
    )
}
