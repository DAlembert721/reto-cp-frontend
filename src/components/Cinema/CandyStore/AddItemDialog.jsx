import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

const AddItemDialog = ({item, setItem, onAddItem}) => {
    const [quantity, setQuantity] = React.useState("");
    const [error, setError] = React.useState(false);
    const handleClose = () => {
        setItem(null);
        setQuantity(1);
        setError(false);
    }
    const onChangeQuantity = number => {
        if(number <= 0) {
            setQuantity("");
        }else {
            setQuantity(number);
        }
    }
    const onAdd = () => {
        if(Number(quantity) <= 0 || quantity === "") {
            setError(true);
        }else {
            onAddItem(Number(quantity));
            handleClose();
        }
    }
    return(
        <Dialog open={Boolean(item)} onClose={handleClose}>
            <DialogTitle>Añadir {item?.description} a Carrito</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Cantidad"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={quantity}
                    onChange={e => onChangeQuantity(e.target.value)}
                    error={error}
                    helperText="La cantidad de este producto debe ser mayor a 0"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onAdd}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddItemDialog;