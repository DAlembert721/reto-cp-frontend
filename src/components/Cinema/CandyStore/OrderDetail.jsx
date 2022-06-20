import React from 'react';
import {Alert, Box, Button, Grid, IconButton, TableCell, TableRow, Typography} from "@mui/material";
import BaseTable from "../../Common/tables/BaseTable";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedItemsToPayment} from "../../../redux/reducers/payment";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();
    const {selectedItems: items} = useSelector(state => state.payment);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = React.useState(false);
    const onDeleteProduct = (item) => {
        setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    }
    const totalOrder = () => {
        return selectedItems.reduce((a, b)=> a + b.quantity * b.price, 0);
    }
    const onClickContinue = () => {
        if(selectedItems.length > 0) {
            dispatch(setSelectedItemsToPayment(selectedItems));
            navigate("/payment");
        }else {
            setShowAlert(true);
        }
    }

    React.useEffect(() => {
        setSelectedItems(items);
    }, []);

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
                className="my-4"
                sx={{
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickContinue}
                >
                    Continuar
                </Button>
            </Box>
            {showAlert && <Box>
                <Alert severity='error'>Agregue por lo menos un producto al carrito</Alert>
            </Box>}
        </Grid>
    );
}

export default OrderDetail;