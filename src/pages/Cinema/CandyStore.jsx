import React from 'react';
import CinemaContainer from "../../components/Cinema/Common/CinemaContainer";
import CandyStoreTable from "../../components/Cinema/CandyStore/CandyStoreTable";
import {useDispatch} from "react-redux";
import {startGetAllCandyStoreItems} from "../../redux/reducers/candyStore";

const CandyStore = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(startGetAllCandyStoreItems());
    }, []);
    return(
        <CinemaContainer title="Dulceria">
            <CandyStoreTable/>
        </CinemaContainer>
    );
}

export default CandyStore;