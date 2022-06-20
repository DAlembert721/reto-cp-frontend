import React from 'react';
import {Box, Button, Grid, IconButton, TableCell, TableRow, Typography} from "@mui/material";
import BaseTable from "../../Common/tables/BaseTable";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const TableHeader = () => (
    <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell>Precio</TableCell>
        <TableCell>Cantidad</TableCell>
        <TableCell>Total</TableCell>
        <TableCell />
    </TableRow>
);

const OrderDetail = ({selectedItems, setSelectedItems}) => {
    const onDeleteProduct = (item) => {
        setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    }
    const totalOrder = () => {
        return selectedItems.reduce((a, b)=> a + b.quantity * b.price, 0);
    }
    return(
        <Grid
            item xs={12} md={9}
        >
            <Typography
                component="div"
                variant="subtitle1"
            >
                Carrito de Compras
            </Typography>
            <Box>
                <BaseTable
                    header={<TableHeader />}
                >
                    {Object.values(selectedItems).map(item => (
                        <TableRow
                            key={item.id}
                        >
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.price * item.quantity}</TableCell>
                            <TableCell>
                                <IconButton onClick={e => onDeleteProduct(item)}>
                                    <DeleteRoundedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                    <TableRow>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell>Total de la orden</TableCell>
                        <TableCell>{totalOrder()}</TableCell>
                    </TableRow>
                </BaseTable>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "1em"
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                >
                    Aceptar
                </Button>
            </Box>
        </Grid>
    );
}

export default OrderDetail;