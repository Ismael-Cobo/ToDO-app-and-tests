import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {


        // el target contiene las propiedades del input, es decir,
        // el name, value, class, prototypes, etc...
        // por eso ponemos target.name y target.value
        // ej:
        // Queremos cambiar el value del input name a ismael 2
        // name: 'ismael 2'

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}
