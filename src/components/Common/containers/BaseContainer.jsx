import React from 'react';
import {Box, Container, Divider, Typography} from "@mui/material";


const BaseContainer = ({title, children}) => {
    return (
        <Box
            component="main"
            sx={{
                display:"grid",
                padding: 2,
                gap: 1
            }}
        >
            <Box className="flex flex-row justify-between w-full align-middle">
                <Typography variant="h4" className="text-start" color="primary">
                    {title}
                </Typography>
            </Box>
            <Divider flexItem sx={{marginBottom: 1}}/>
            <Box>
                {children}
            </Box>
        </Box>

    );
}

export default BaseContainer;