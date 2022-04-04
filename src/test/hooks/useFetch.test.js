import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('prueba en el custom hook useFetch', () => {

    test('debe de retornar los valores por defecto', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))

        const { data, loading, error } = result.current

        await waitForNextUpdate({timeout: 2000})

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)


    })

    test('debe de retornar la información deseada, loading: false, error: null', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))

        await waitForNextUpdate({timeout: 2000})
        
        const { data, loading, error } = result.current


        expect(data.length).toBe(1)
        expect(loading).toBe(false)
        expect(error).toBe(null)
    })

    test('debe de retornar la información deseada, loading: false, error: null', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'))

        await waitForNextUpdate({timeout: 2000})
        
        const { data, loading, error } = result.current


        expect(data).toBe(null)
        expect(loading).toBe(false)
        expect(error).toBe('No se pudo cargar la información')
    })
})