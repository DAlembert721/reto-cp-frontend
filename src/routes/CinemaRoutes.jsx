import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Cinema/Home";
import CandyStore from "../pages/Cinema/CandyStore";
import Payment from "../pages/Cinema/Payment";

const CinemaRoutes = (props) => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/candy-store" element={<CandyStore />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
);

export default CinemaRoutes;