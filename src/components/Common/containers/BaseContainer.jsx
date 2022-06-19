import React from 'react';
import {Box, Container} from "@mui/material";

const BaseContainer = ({children}) => {
    return(
        <Container
            maxWidth='xl'
        >
            <Box
                width="100%"
            >
                <Box>
                    {children}
                </Box>
            </Box>

        </Container>

    );
}

export default BaseContainer;