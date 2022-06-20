import {useEffect, useMemo, useState} from "react";

export const useForm = (initialState = {}, validators = {},) => {
    const [values, setValues] = useState(initialState);
    const [validation, setValidation] = useState({});

    useEffect(() => {
        createFormValidations();
    }, [values]);

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( validation )) {
            if ( validation[formValue] !== null ) return false;
        }

        return true;
    }, [ validation ])

    const reset = (newState = initialState) => {
        setValues(newState)
    };

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    const createFormValidations = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( validators )) {
            const [ fn, errorMessage ] = validators[formField];
            formCheckedValues[`${ formField }Valid`] = fn( values[formField] ) ? null : errorMessage;
        }

        setValidation( formCheckedValues );
    }


    return {...values, handleInputChange, reset, formState: values, formValidations: validation, ...validation, isFormValid};
}