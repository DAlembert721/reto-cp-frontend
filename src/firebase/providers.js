import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import {FirebaseAuth} from "./config";
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, uid} = result.user;
        return {
            ok: true,
            displayName,
            email,
            uid
        }
    }catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        return {
            ok: true,
            errorMessage,
        }
    }
}

export const createUserByFormData = async ({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            email,
            displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithUserAndPassword = async ({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, displayName } = resp.user;

        return {
            ok: true,
            uid,
            email,
            displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}