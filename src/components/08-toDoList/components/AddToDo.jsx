import { useState } from "react"

export const AddToDo = ({handleAddToDo}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 2) return

        const newTodo = {
            id: new Date().getTime(),
            desc: inputValue,
            done: false
        };

        handleAddToDo(newTodo)

        setInputValue('')
    } 


    return (
        <form className='todo__form' onSubmit={handleSubmit}>
            <label className='form__title' htmlFor='todo'> Today I need to </label>
            <div className='form__input__group'>
                <input
                    type='text'
                    id='todo'
                    className='form__input'
                    value={inputValue}
                    onChange={handleInputChange}

                />
                <input
                    type='submit'
                    value='submit'
                    className='form__btn'
                />
            </div>
        </form>
    )
}
