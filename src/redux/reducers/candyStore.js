import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCandyStoreItems} from "../../services/CandyStoreService";

const INIT_STATE = {
    data: []
}

const candyStoreSlice = createSlice({
    name: 'candyStore',
    initialState: {
        ...INIT_STATE
    },
    reducers: {
        getAllCandyStoreItems: (state, action) => {
            state.data = action.payload;
        }
    }
});


export const {getAllCandyStoreItems} = candyStoreSlice.actions;

export const startGetAllCandyStoreItems = () => {
    return async dispatch => {
        fetchAllCandyStoreItems()
            .then(items => {
                dispatch(getAllCandyStoreItems(items));
            }).catch(err => {
                console.error(err);
        });
    }
}



export default candyStoreSlice.reducer;