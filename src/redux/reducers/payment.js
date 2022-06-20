import {createSlice} from "@reduxjs/toolkit";

const INIT_STATE = {
    selectedItems: [],
}

const paymentSlice = createSlice({
   name: 'payment',
    initialState: {
       ...INIT_STATE
    },
    reducers: {
       setSelectedItemsToPayment: (state, action) => {
           state.selectedItems = action.payload;
       },
       resetPaymentState: (state) => {
           state.selectedItems = INIT_STATE.selectedItems;
       }
    }
});


export const {setSelectedItemsToPayment, resetPaymentState} = paymentSlice.actions;

export default paymentSlice.reducer;