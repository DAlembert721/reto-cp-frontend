import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import MenuNavBar from "./components/Common/navigation/MenuNavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CandyStore from "./pages/CandyStore";
import Payment from "./pages/Payment";

const App  = () => {
  return (
      <Box>
          <MenuNavBar />
          <Box width="100%" p={0}>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/candy-store" element={<CandyStore />}/>
                  <Route path="/payment" element={<Payment />}/>
              </Routes>
          </Box>
      </Box>
  )
}

export default App
