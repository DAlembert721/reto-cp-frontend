import React from 'react';
import CinemaContainer from "../../components/Cinema/Common/CinemaContainer";
import PremiersList from "../../components/Cinema/Home/PremiersList";
import {useDispatch} from "react-redux";
import {startGetAllPremieres} from "../../redux/reducers/premieres";
import {resetPaymentState} from "../../redux/reducers/payment";

const Home = (props) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(startGetAllPremieres());
        dispatch(resetPaymentState());
    }, []);
    return(
        <CinemaContainer title="Premiers">
            <PremiersList/>
        </CinemaContainer>
    );
}

export default Home;