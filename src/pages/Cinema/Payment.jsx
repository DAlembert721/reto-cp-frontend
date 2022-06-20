import React from 'react';
import CinemaContainer from "../../components/Cinema/Common/CinemaContainer";
import {Grid} from "@mui/material";
import OrderDetail from "../../components/Payment/OrderDetail";

const Payment = () => (
    <CinemaContainer title="Payment">
        <Grid container spacing={2}>
            <OrderDetail />
        </Grid>
    </CinemaContainer>

);

export default Payment;