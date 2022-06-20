import {createSlice} from "@reduxjs/toolkit";
import {
    createUserByFormData,
    loginWithUserAndPassword,
    logoutFirebase,
    signInWithGoogle
} from "../../firebase/providers";

const INIT_STATE = {
    status: 'invite', //'checking', 'not-authenticated', 'authenticated', 'invite'
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        ...INIT_STATE
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;

        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload || null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';

        },
        loginLikeInvite: (state) => {
            state.status = 'invite';
        }
    }
})

export const {login, logout, checkingCredentials, loginLikeInvite} = authSlice.actions;

export const checkingAuth = (email, password) => {
    return async dispatch => {
        dispatch(checkingCredentials());
    }
}

export const loginWithGoogle = () => {
    return async dispatch => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        !result.ok? dispatch(logout(result.errorMessage)) : dispatch(login(result));
    }
}

export const loginWithLoginForm = (data) => {
    return async dispatch => {
        dispatch(checkingCredentials());
        const {ok, uid, email, displayName, errorMessage} = await loginWithUserAndPassword(data);

        if(!ok) return dispatch(logout(errorMessage));

        dispatch(login({uid, displayName, email}));

    }
}

export const createUserWithRegisterFormData = (data) => {
    return async dispatch => {
        dispatch(checkingCredentials());
        const {ok, uid, email, displayName, errorMessage} = await createUserByFormData(data);
        if(!ok) return dispatch(logout(errorMessage));

        dispatch(login({uid, displayName, email}));
    }
}

export const logoutFromFirebase = () => {
    return async dispatch => {
        await logoutFirebase();
        dispatch(logout());
    }
}



export default authSlice.reducer;