const { shallow } = require("enzyme")
const { AddToDo } = require("../../../../components/08-toDoList/components/AddToDo")

describe('prueba para el componente <AddToDo />', () => {

    const handleAddToDo = jest.fn()

    const wrapper = shallow(<AddToDo handleAddToDo={handleAddToDo} />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('no debe de llamar al handleAddToDo', () => {

        const formulario = wrapper.find('.todo__form')

        formulario.simulate('submit', {preventDefault(){}})

        expect(handleAddToDo).toHaveBeenCalledTimes(0)

    })

    test('debe de llamar al handleAddToDo', () => {

        const value = 'hola que tal?'

        wrapper.find('.form__input').simulate('change', { target:{value: value }})

        const formulario = wrapper.find('.todo__form')
        
        formulario.simulate('submit', {preventDefault(){}})

        expect(handleAddToDo).toHaveBeenCalledTimes(1)
        expect(handleAddToDo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        })

        //Para comprobar que se hizo el reset
        expect(wrapper.find('.form__input').prop('value')).toBe('')

    })



})
