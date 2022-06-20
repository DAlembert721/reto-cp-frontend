import { Navigate, Route, Routes } from 'react-router-dom';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";


const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />

            <Route path='/*' element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}

export default AuthRoutes;