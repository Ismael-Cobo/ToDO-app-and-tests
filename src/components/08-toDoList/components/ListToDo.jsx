import { TodoListItem } from "./TodoListItem"

export const ListToDo = ({ todos, handleDelete, handleToggle }) => {

    return (
        <section className='todo__items'>
            <ul className='todo__items__list'>
                {
                    todos
                        ? todos.map(todo => (
                            <div
                                className='todo__item__container'
                                key={todo.id}
                            >
                                <TodoListItem
                                    todo={todo}
                                    handleDelete={handleDelete}
                                    handleToggle={handleToggle}
                                />
                            </div>
                        ))
                        : ''
                }
            </ul>
        </section>
    )
}