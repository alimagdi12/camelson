import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import UserManagement from "./features/user-management/User-management";
import Navbar from "./shared/components/navbar/navbar";
import Footer from "./shared/components/footer/footer";
import "./App.scss";
import Store from "./features/store/Store";
import SubCategory from "./features/sub-category/Sub-category";
import Compdata from "./features/completeData/Compdata";
import RequestData from "./features/requestData/RequestData";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:sub-category" element={<SubCategory/>} />
        <Route path="/complete-data" element={<Compdata />} />
        <Route path="/user-management/:page" element={<UserManagement />} />
        <Route path="/request-data" element={<RequestData />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
