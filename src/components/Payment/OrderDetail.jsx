import React from 'react';
import {Box, Button, Grid, TableCell, TableRow} from "@mui/material";
import BaseTable from "../Common/tables/BaseTable";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const TableHeader = () => (
    <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell>Precio</TableCell>
        <TableCell>Cantidad</TableCell>
        <TableCell>Total</TableCell>
    </TableRow>
);

const OrderDetail = () => {
    const navigate = useNavigate();
    const {selectedItems} = useSelector(state => state.payment);
    const totalOrder = () => {
        return selectedItems.reduce((a, b)=> a + b.quantity * b.price, 0);
    }
    const items = React.useMemo(() => selectedItems, [selectedItems]);
    const onClickPrevious = () => {
        navigate('/candy-store');
    }
    return(
        <Grid item xs={12}>
            <Box
                className="my-4"
                sx={{
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickPrevious}
                >
                    Regresar a Dulceria
                </Button>
            </Box>
            <BaseTable
                header={<TableHeader/>}
            >
                {items.map(item => (
                    <TableRow
                        key={item.id}
                    >
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.price * item.quantity}</TableCell>
                    </TableRow>
                ))
                }
                <TableRow>
                    <TableCell/>
                    <TableCell/>
                    <TableCell>Total de la orden</TableCell>
                    <TableCell>{totalOrder()}</TableCell>
                </TableRow>
            </BaseTable>
        </Grid>
    );
}

export default OrderDetail;