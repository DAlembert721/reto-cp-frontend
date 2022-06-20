import React from 'react';
import {Box} from "@mui/material";
import MenuNavBar from "../../Common/navigation/MenuNavBar";
import BaseContainer from "../../Common/containers/BaseContainer";

const CinemaContainer = ({title, children}) => (
    <Box className="flex">
        <MenuNavBar />
        <BaseContainer title={title}>
            {children}
        </BaseContainer>
    </Box>
);

export default CinemaContainer;