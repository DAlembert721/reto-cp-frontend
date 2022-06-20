import React from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select as BaseSelect} from "@mui/material";

const Select = ({
                    labelId = 'base-label', label,
                    value, name, onChange, children, fullWidth,
                    error, ...rest
                }) => {
    const id = React.useId();
    return (
        <FormControl sx={{width: "100%"}}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <BaseSelect
                labelId={labelId}
                id={id}
                value={value}
                label={label}
                onChange={onChange}
                name={name}
                fullWidth={fullWidth}
                error={Boolean(error)}
                {...rest}
            >
                {children}
            </BaseSelect>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    );
}

export default Select;