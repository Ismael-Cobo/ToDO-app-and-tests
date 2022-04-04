import { shallow } from "enzyme"
import { ListToDo } from "../../../../components/08-toDoList/components/ListToDo"
import { demoReducer } from "../../../fixtures/demoTodos"

describe('test del componente <ListToDo />', () => {

    const todos = demoReducer
    const handleToggle = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow(
        <ListToDo
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener 3 <ListItems /> con sus props', () => {
        const listItems = wrapper.find('TodoListItem')

        expect(listItems.length).toBe(todos.length)
        expect(listItems.at(0).prop('handleToggle')).toEqual(expect.any(Function))
        expect(listItems.at(0).prop('handleDelete')).toEqual(expect.any(Function))
        expect(listItems.at(0).prop('todo')).toEqual(todos[0])
    })
})