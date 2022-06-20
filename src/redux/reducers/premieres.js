import {createSlice} from "@reduxjs/toolkit";
import {uiSlice} from "./ui";

const INIT_STATE = {
    data: {}
}

export const premieresSlice = createSlice({
    name: 'premieres',
    initialState: {
        ...INIT_STATE
    },
     reducers: {
        getAllPremieres: (state, payload) => {

        }
     }
});



export default uiSlice.reducer;