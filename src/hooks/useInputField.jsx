
import { useState } from 'react';
const useInputField = (defaultValue) => {

    const [FieldValue, setFieldValue] = useState(defaultValue);


    const handleFieldOnChange = e =>{

        setFieldValue(e.target.value);

    };
    return [FieldValue, handleFieldOnChange];

};

export default useInputField;