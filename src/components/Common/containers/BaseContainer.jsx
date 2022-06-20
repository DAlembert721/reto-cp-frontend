import React from 'react';
import {Box, Container, Divider, Typography} from "@mui/material";


const BaseContainer = ({title, children}) => {
    return (
        <Container maxWidth="xl">
            <Box>
                <Typography variant="h4" className="text-start" color="primary">
                    {title}
                </Typography>
            </Box>
            <Divider flexItem sx={{marginBottom: 1}}/>
            <Box>
                {children}
            </Box>
        </Container>

    );
}

export default BaseContainer;