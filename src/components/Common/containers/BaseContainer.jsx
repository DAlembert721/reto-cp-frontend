import React from 'react';
import {Box, Container} from "@mui/material";



const BaseContainer = ({children}) => {
    return(
        <Container
            className="max-w-full"
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