import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import AuthRoutes from "./AuthRoutes";
import CinemaRoutes from "./CinemaRoutes";
import CheckingAuth from "../components/Ui/CheckingAuth";
import {useCheckAuth} from "../hooks/useCheckAuth";

const AppRouter = () => {
    const status = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth/>
    }
    if (status === 'invite') {
        return (
            <Routes>
                <Route path="/*" element={<CinemaRoutes/>}/>
                <Route path="/auth/*" element={<AuthRoutes/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            {
                (status === 'authenticated' || status==='invite')
                    ? <Route path="/*" element={<CinemaRoutes/>}/>
                    : <Route path="/auth/*" element={<AuthRoutes/>}/>
            }
            <Route path='/*' element={ <Navigate to='/auth/login' />  } />
        </Routes>
    )
}

export default AppRouter;