import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPremieres} from "../../services/PremiersServices";

const INIT_STATE = {
    data: []
}

export const premieresSlice = createSlice({
    name: 'premieres',
    initialState: {
        ...INIT_STATE
    },
     reducers: {
        getAllPremieres: (state, action) => {
            state.data = action.payload;
        }
     }
});


export const {getAllPremieres,} = premieresSlice.actions;

export const startGetAllPremieres = () => {
    return async dispatch => {
        fetchAllPremieres
            .then(premieres => {
                dispatch(getAllPremieres(premieres))
            })
            .catch(e => console.log(e));
    }
}

export default premieresSlice.reducer;