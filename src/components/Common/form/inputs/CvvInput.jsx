import React, {useId} from 'react';
import {FormControl, Input, InputLabel} from "@mui/material";

const CvvInput = ({label, value, onChange}) => {
    const id = useId();
    const handleChange = (event) => {
        if(!event.target.value){

        }
    }
    return(
        <FormControl variant="standard">
            <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
            <Input
                value={value}
                onChange={handleChange}
                name="cvv"
                id={id}
            />
            <HelperText />
        </FormControl>
    );
}

export default CvvInput;