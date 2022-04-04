import { types } from "../../../../components/08-toDoList/constant/const"
import { todoReducer } from "../../../../components/08-toDoList/reducers/todoReducer"
import { demoReducer } from "../../../fixtures/demoTodos"



describe('prueba para el todoReducer', () => {



    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoReducer, { type: '' })

        expect(state).toEqual(demoReducer)
    })

    test('debe de agregar un nuevo TODO', () => {

        const newtoDo = {
            id: 2,
            desc: 'prueba 1',
            done: false
        }
        const action = {
            type: types.add_todo,
            payload: newtoDo
        }

        const state = todoReducer(demoReducer, action)

        expect(state).toEqual([...demoReducer, newtoDo])

    })

    test('debe de eliminar un TODO', () => {

        const action = {
            type: types.delete_todo,
            payload: 1
        }

        const state = todoReducer(demoReducer, action)

        const toDosAfterDeleteAction = [
            {
                id: 2,
                desc: 'Hacer aquello otro',
                done: true
            },
            {
                id: 4,
                desc: 'Hacer aquello otro2',
                done: true
            }
        ]


        expect(state).toEqual(toDosAfterDeleteAction)

    })

    test('debe de hacer el done de un TODO', () => {
        const action = {
            type: types.done_todo,
            payload: 1
        }

        const state = todoReducer(demoReducer, action)

        expect(state[0].done).toBe(!demoReducer[0].done)
        expect(state[1]).toEqual(demoReducer[1])

    })

})