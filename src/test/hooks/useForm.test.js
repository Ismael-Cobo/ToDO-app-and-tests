const { renderHook, act } = require("@testing-library/react-hooks")
const { useForm } = require("../../hooks/useForm")

describe('probando el custom hook useForm', () => {

    const initialState = {
        name: 'Ismael',
        email: 'ismael@ismael.com'
    }

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialState))

        const [formValues, handleInputChange, reset] = result.current

        expect(formValues).toBe(initialState)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')

    })

    test('debe de cambiar el valor del formulario (name)', () => {

        const { result } = renderHook(() => useForm(initialState))
        const [, handleInputChange] = result.current


        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'ismael 2'
                }
            })
        })

        const [formValues] = result.current

        const formValueToTest = {
            ...initialState,
            name: 'ismael 2'
        }

        expect(formValues).toEqual(formValueToTest)

    })

    test('debe de restablecer el formulario', () => {
        const { result } = renderHook(() => useForm(initialState))
        const [, handleInputChange, reset] = result.current


        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'ismael 2'
                }
            })

            reset()
        })

        const [formValues] = result.current

        expect(formValues).toEqual(initialState)


    })
})