import React from 'react';
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useForm} from "../../../hooks/useForm";
import {createUserWithRegisterFormData} from "../../../redux/reducers/auth";
import {useDispatch, useSelector} from "react-redux";


const formData = {
    displayName: '',
    email: '',
    password: '',
}

const validations = {
    email: [value => value.includes('@'), 'El correo debe contener un @'],
    password: [value => value.length >=6, 'El password debe contener por lo menos 6 caracteres'],
    displayName: [value => value.length >= 1 , 'El nombre es obligatorio']
}

const Form = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = React.useMemo( () => status === 'checking', [status]);

    const {email, displayName, password,
        handleInputChange, formState, isFormValid,
        displayNameValid, emailValid, passwordValid
    } = useForm(formData, validations);
    const onSubmit = e => {
        e.preventDefault();
        setFormSubmitted(true);
        if ( !isFormValid ) return;
        dispatch(createUserWithRegisterFormData(formState));
        navigate("/candy-store");
    }

    return(
        <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={12} sx={{mt: 2}}>
                    <TextField
                        label="Nombre Completo"
                        type="text"
                        placeholder='Nombre Completo'
                        fullWidth
                        name="displayName"
                        value={displayName}
                        onChange={handleInputChange}
                        error={ !!displayNameValid && formSubmitted }
                        helperText={ displayNameValid }
                    />
                </Grid>
                <Grid item xs={12} sx={{mt: 2}}>
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder='correo@google.com'
                        fullWidth
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        error={ !!emailValid && formSubmitted }
                        helperText={ emailValid }
                    />
                </Grid>
                <Grid item xs={12} sx={{mt: 2}}>
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder='Contraseña'
                        fullWidth
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        error={ !!passwordValid && formSubmitted }
                        helperText={ passwordValid }
                    />
                </Grid>

                <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

                    <Grid
                        item
                        xs={ 12 }
                        display={ !!errorMessage ? '': 'none' }
                    >
                        <Alert severity='error'>{ errorMessage }</Alert>
                    </Grid>


                    <Grid item xs={12}>
                        <Button
                            disabled={ isCheckingAuthentication }
                            type="submit"
                            variant='contained'
                            fullWidth>
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>


                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
                    <Link component={RouterLink} color='inherit' to="/auth/login">
                        Login
                    </Link>
                </Grid>

            </Grid>


        </form>

    );
}

export default Form;