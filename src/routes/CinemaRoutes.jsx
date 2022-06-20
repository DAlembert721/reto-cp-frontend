import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Cinema/Home";
import CandyStore from "../pages/Cinema/CandyStore";
import Payment from "../pages/Cinema/Payment";
import {Box, Toolbar} from "@mui/material";
import MenuNavBar from "../components/Common/navigation/MenuNavBar";

const CinemaRoutes = (props) => (
    <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 1}} className='animate__animated animate__fadeIn animate__faster'
    >
        <MenuNavBar />
        <Box>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/candy-store" element={<CandyStore />}/>
                <Route path="/payment" element={<Payment />}/>
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </Box>
    </Box>
);

export default CinemaRoutes;