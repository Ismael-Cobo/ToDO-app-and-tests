import { types } from "../constant/const";


export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case types.add_todo:
            return [
                ...state,
                action.payload
            ]

        case types.done_todo:
            return [
                ...state.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, done: !todo.done }
                        : todo)
            ]

        case types.delete_todo:
            return [
                ...state.filter(todo =>
                    todo.id !== action.payload
                )
            ]

        default:
            return state
    }
}