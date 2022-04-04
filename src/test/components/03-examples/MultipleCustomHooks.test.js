import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../hooks/useFetch"
jest.mock("../../../hooks/useFetch")

describe('prueba del componente <MultipleCustomHooks />', () => {

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper).toMatchSnapshot()


    })

    test('debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Ismael',
                quote: 'Hey '
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper).toMatchSnapshot()

    })


})