import React from 'react';
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {useForm} from "../../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {checkingAuth, loginLikeInvite, loginWithGoogle, loginWithLoginForm} from "../../../redux/reducers/auth";

const formData = {
    email: '',
    password: '',
};
const validations = {
    email: [value => value.includes('@'), 'El correo debe contener un @'],
    password: [value => value.length >= 6, 'El password debe contener por lo menos 6 caracteres']
}

const Form = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const { status, errorMessage } = useSelector( state => state.auth );
    const {
        email, password, handleInputChange,
        emailValid, passwordValid, isFormValid, formState
    } = useForm(formData, validations);
    const isAuthenticated = React.useMemo(() => status === 'checking', [status]);

    const onClickInvite = () => {
        dispatch(loginLikeInvite());
        navigate("/candy-store");
    }
    const onSubmit = e => {
        e.preventDefault();
        setFormSubmitted(true);
        if ( !isFormValid ) return;
        dispatch(loginWithLoginForm(formState));
        navigate("/candy-store");
    }
    const onGoogleSignIn = () => {
        dispatch(loginWithGoogle());
        navigate("/candy-store");
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container>
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
                    <Grid item xs={12} sm={6}>
                        <Button
                            disabled={isAuthenticated}
                            type="submit"
                            variant='contained' fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            disabled={isAuthenticated}
                            onClick={onGoogleSignIn}
                            variant='contained' fullWidth>
                            <Google/>
                            <Typography sx={{ml: 1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>


                <Grid container direction='row' justifyContent='end' gap={1}>
                    <Link color='inherit' onClick={onClickInvite}>
                        Ingresar como invitado
                    </Link>
                    <Link component={RouterLink} color='inherit' to="/auth/register">
                        Crear una cuenta
                    </Link>
                </Grid>

            </Grid>


        </form>
    );
}

export default Form;