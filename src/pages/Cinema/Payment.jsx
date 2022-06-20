import React from 'react';
import CinemaContainer from "../../components/Cinema/Common/CinemaContainer";
import {Grid} from "@mui/material";
import OrderDetail from "../../components/Cinema/Payment/OrderDetail";
import Form from "../../components/Cinema/Payment/Form";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();
    const {selectedItems} = useSelector(state => state.payment);
    React.useEffect(() => {
        selectedItems.length === 0 && navigate('/candy-store');
    }, []);
    return(
        <CinemaContainer title="Payment">
            <Grid container spacing={2} sx={{marginTop: "0.25em"}}>
                <OrderDetail/>
                <Form/>
            </Grid>
        </CinemaContainer>

    );
}

export default Payment;