import {createSlice} from "@reduxjs/toolkit";
import {makePayment} from "../../services/PayuService";
import {completePurchase} from "../../services/PaymentService";

const INIT_STATE = {
    selectedItems: [],
    payment: ""
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
       },
        purchase: (state, action) => {
           state.payment = action.payload;
        }
    }
});


export const {setSelectedItemsToPayment, resetPaymentState, purchase} = paymentSlice.actions;

export const startPurchase = (formData)  => {
    return async dispatch => {
        try {
            console.log(formData);
            const {code, operationDate} = await makePayment(formData);
            const {result} = await completePurchase({...formData, operationDate});
        }catch (e) {
            console.log(e.message);
        }
    }

}

export default paymentSlice.reducer;