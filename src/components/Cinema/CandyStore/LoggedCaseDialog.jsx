import React from 'react';
import {useCheckAuth} from "../../../hooks/useCheckAuth";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useSelector} from "react-redux";

const LoggedCaseDialog = () => {
    const status = useCheckAuth();
    const {displayName} = useSelector(state => state.auth);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    React.useEffect(() => {
        status === 'authenticated' && setOpen(true);
    }, []);
    return(
        <Dialog
            sx={{
                minHeight: "400px",
                minWidth: "400px",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Bienvenido"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {displayName}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Aceptar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default LoggedCaseDialog;