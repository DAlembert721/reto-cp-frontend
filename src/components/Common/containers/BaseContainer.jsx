import React from 'react';
import {Box, Container, Typography} from "@mui/material";


const BaseContainer = ({title, children}) => {
    return (
        <Box
            component="main"
            className="flex-grow p-3"
        >
            <Box className="flex flex-row justify-between w-full align-middle">
                <Typography variant="h4" className="text-start" color="primary">
                    {title}
                </Typography>
            </Box>
            <Box>
                {children}
            </Box>
        </Box>

    );
}

export default BaseContainer;