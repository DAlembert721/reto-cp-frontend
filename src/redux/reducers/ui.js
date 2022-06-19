import {createSlice} from "@reduxjs/toolkit";

const INIT_STATE = {
    isLoading: false,
    result: {
        success: null,
        message: ""
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        ...INIT_STATE
    },
    reducers: {
        requestStarted: (state) => {
            state.isLoading = true;
        },
        requestSuccess: (state, action) => {
            state.isLoading = false;
            state.result.success = true;
            state.result.message = action.payload;
        },
        requestError: (state) => {
            state.isLoading = false;
            state.result.success = false;
            state.result.message = action.payload;
        },
        resetUiState: (state) => {
            state = INIT_STATE;
        }

    }
});

export const {requestStarted, requestSuccess, requestError, resetUiState} = uiSlice.actions;

export default uiSlice.reducer;