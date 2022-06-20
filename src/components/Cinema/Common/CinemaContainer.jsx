import React from 'react';
import BaseContainer from "../../Common/containers/BaseContainer";

const CinemaContainer = ({title, children}) => (

    <BaseContainer title={title}>
        {children}
    </BaseContainer>

);

export default CinemaContainer;