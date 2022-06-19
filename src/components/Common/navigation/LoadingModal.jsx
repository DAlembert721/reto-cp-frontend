import React from 'react';
import {Box, CircularProgress, Container, Modal} from "@mui/material";
import {useSelector} from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const LoadingModal = () => {
    const {isLoading} = useSelector(state => state.ui);
    return(
        <Modal
            open={isLoading}
            sx={{
                backgroundColor: 'transparent',
            }}
        >
            <Box
                sx={style}
            >
                <CircularProgress/>
            </Box>
        </Modal>
    );
}

export default LoadingModal;