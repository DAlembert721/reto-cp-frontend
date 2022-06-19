import React from 'react';
import {StyledEngineProvider} from "@mui/material";


const PlainCssPriority = ({children}) => (
    <StyledEngineProvider injectFirst>
        {children}
    </StyledEngineProvider>
);

export default PlainCssPriority;