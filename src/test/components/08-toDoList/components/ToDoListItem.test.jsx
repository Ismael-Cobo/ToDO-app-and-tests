import { shallow } from "enzyme"
import { TodoListItem } from "../../../../components/08-toDoList/components/TodoListItem"
import { demoReducer } from "../../../fixtures/demoTodos"

describe('pruebas en el componente <ListToDo />', () => {

    const todo = demoReducer[0]
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()


    const wrapper = shallow(
        <TodoListItem
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de llamar la función handleDelete', () => {

        const button = wrapper.find('.todo__item__delete')

        button.simulate('click', { id: todo.id })

        expect(handleDelete).toHaveBeenCalledWith(todo.id)
        expect(handleDelete).toHaveBeenCalled()
    })

    test('debe de llamar la función handleTogle', () => {
        const text = wrapper.find('.todo__item__text')

        text.simulate('click', { id: todo.id })

        expect(handleToggle).toHaveBeenCalledWith(todo.id)
    })

    test('debe de mostrar el texto correctamente', () => {
        const text = wrapper.find('.todo__item__text')

        expect(text.text()).toBe(todo.desc)

    })

})