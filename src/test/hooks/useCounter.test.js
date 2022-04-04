import { act, renderHook } from "@testing-library/react-hooks"

import { useCouter } from '../../hooks/useCouter'

describe('pruebas en useCounter', () => {

    test('debe de retornar el valor por defecto 10', () => {

        const { result } = renderHook( () => useCouter())

        const { counter } = result.current

        expect(counter).toBe(10)
    })

    test('debe de retornar el valor 100', () => {

        const { result } = renderHook( () => useCouter())

        const { counter } = result.current

        expect(counter).toBe(10)
    })

    test('debe de incrementar el valor en  1', () => {

        const { result } = renderHook( () => useCouter(100))

        const { increment } = result.current

        act(() => {
            increment()
        })

        const { counter } = result.current

        expect(counter).toBe(101)
    })

    test('debe de decrementar el valor en  1', () => {

        const { result } = renderHook( () => useCouter(100))

        const { decrement } = result.current

        act(() => {
            decrement()
        })

        const { counter } = result.current

        expect(counter).toBe(99)
    })

    
    test('debe de resetear el valor', () => {

        const { result } = renderHook( () => useCouter(100))

        const { decrement, reset } = result.current

        act(() => {
            decrement()
            reset()
        })

        const { counter } = result.current

        expect(counter).toBe(100)
    })


})