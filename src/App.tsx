import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import UserManagement from "./features/user-management/User-management";
import Navbar from "./shared/components/navbar/navbar";
import Footer from "./shared/components/footer/footer";
import './App.scss'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-management/:page" element={<UserManagement />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
