import React from 'react';
import './Form.css';
import {useForm} from "../../../hooks/useForm";
import {Box, Button, Grid, MenuItem, Paper, TextField, Typography} from "@mui/material";
import Cleave from 'cleave.js/react';
import CardInput from "../../Common/form/inputs/CardInput";
import Select from "../../Common/form/selects/Select";
import {startPurchase} from "../../../redux/reducers/payment";
import {useDispatch, useSelector} from "react-redux";

const initialData = {
    card: "",
    expirationYear: new Date().getFullYear().toString(),
    expirationMonth: new Date().getMonth().toString(),
    cvv: "",
    email: "",
    cardHolder: "",
    documentType: "DNI",
    document: "",
}

const validations = {
    card: [value => value.trim().length > 0 && value.trim().length <= 16, "El numero de tarjeta debe tener entre 0 y 4 caracteres"],
    expirationYear: [value => value.toString().trim().length > 0 && value.toString().trim().length <= 2, "El Año fecha ingresada es incorrecta"],
    expirationMonth: [value => value.toString().trim().length > 0 && value.toString().trim().length <= 2, "El mes ingresada es incorrecta"],
    cvv: [value => value.trim().length > 0 && value.trim().length <= 4, "El codigo de seguridad debe tener entre 0 y 4 caracteres"],
    email: [value => value.includes('@'), ""],
    cardHolder: [value => value.trim().length > 0, "El nombre es necesario"],
    documentType: [value => value.trim().length > 0, "Indique el tipo de documento"],
    document: [value => value.trim().length > 0, "El numero de documento es necesario"],
}



const Form = () => {
    const dispatch = useDispatch();
    const {selectedItems} = useSelector(state => state.payment);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const {
        formState, formValidations,
        isFormValid, handleInputChange
    } = useForm(initialData, validations);
    const onSubmit = e => {
        e.preventDefault();
        console.log('submit')
        const amount = selectedItems.reduce((a, b)=> a + b.quantity * b.price, 0);
        // if(!isFormValid) return;
        dispatch(startPurchase({...formState, amount}));
    }
    return (
        <Grid item xs={6} className="flex justify-center">
            <Box
                component={Paper}
                sx={{
                    maxWidth: "500px",
                    maxHeight: "100%",
                    padding: "1rem",
                    borderRadius: "10px",
                    boxShadow: "1px 1px 10px #545454e8"
                }}
            >
                <Typography variant="h5" sx={{marginBottom: "0.5em"}}>
                    Datos de Pago
                </Typography>
                <form id="card-form" onSubmit={onSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <CardInput
                                card={formState.card}
                                handleInputChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Select
                                fullWidth
                                label="Año de Expiracion"
                                name="expirationYear"
                                value={formState.expirationYear}
                                onChange={handleInputChange}
                                required
                            >
                                <MenuItem value="2022">2022</MenuItem>
                                <MenuItem value="2023">2023</MenuItem>
                                <MenuItem value="2024">2024</MenuItem>
                                <MenuItem value="2025">2025</MenuItem>
                                <MenuItem value="2026">2026</MenuItem>
                                <MenuItem value="2027">2027</MenuItem>
                                <MenuItem value="2028">2028</MenuItem>
                                <MenuItem value="2029">2029</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Select
                                fullWidth
                                label="Mes de Expiracion"
                                name="expirationMonth"
                                value={formState.expirationMonth}
                                onChange={handleInputChange}
                                required
                            >
                                {Array.from(Array(12).keys())
                                    .map(number => (
                                        <MenuItem
                                            key={number}
                                            value={number}>
                                            {number+1}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="CVV"
                                name="cvv"
                                value={formState.cvv}
                                onChange={handleInputChange}
                                fullWidth
                                type="password"
                                placeholder="CVV"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electrónico"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                                fullWidth
                                type="email"
                                placeholder="Ingrese su email"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Titular de la tarjeta"
                                name="cardHolder"
                                value={formState.cardHolder}
                                onChange={handleInputChange}
                                fullWidth
                                type="text"
                                placeholder="Ingrese su nombre completo"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Select
                                fullWidth
                                label="Tipo de Documento"
                                name="documentType"
                                value={formState.documentType}
                                onChange={handleInputChange}
                                required
                            >
                                <MenuItem value="DNI">DNI</MenuItem>
                                <MenuItem value="CE">Carnet de Extranjeria</MenuItem>
                                <MenuItem value="DE">Pasaporte</MenuItem>
                                <MenuItem value="RUC">RUC</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Numero de Documento"
                                name="document"
                                value={formState.document}
                                onChange={handleInputChange}
                                fullWidth
                                type="text"
                                placeholder="Ingrese su numero de documento"
                                required
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="flex justify-center mt-2"
                        >
                            <Button
                                onClick={onSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Pagar
                            </Button>
                        </Grid>
                    </Grid>

                </form>

            </Box>
        </Grid>


    );
}

export default Form;