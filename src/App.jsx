import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";


import LoginUser from "./pages/Login/auth/LoginUser";
import RegisterUser from './pages/Register/Cadastro/RegisterUser';

import Digital from "./pages/Digital/Digital";
import Home from "./pages/Home/Home";





function App() {
  

  return (
    <>
    <NavBar />

    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/digital" element={<Digital />}/>
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
    </>
  )
}

export default App
