const { shallow } = require("enzyme")
const { RealExampleRef } = require("../../../components/04-useRef/RealExampleRef")

describe('prueba del componente <RealExampleRef />', () => {


    test('debe de mostrarse correctamenete', () => {

        const wrapper = shallow(<RealExampleRef />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    })

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {

        const wrapper = shallow(<RealExampleRef />)
        
        const button = wrapper.find('button')

        button.simulate('click')

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)

    })
})