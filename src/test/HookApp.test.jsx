import { shallow } from "enzyme"
import { HookApp } from "../../HookApp"

describe('prueba para el componente <HookApp />', () => {

    test('debe de cargar bien el componente', () => {

        const wrapper = shallow(<HookApp />)

        expect(wrapper).toMatchSnapshot()
    })
})