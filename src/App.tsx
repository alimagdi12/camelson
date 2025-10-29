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
import Cart from "./features/cart/Cart";
import TrackingOrder from "./features/trackOrder/TrackingOrder";
import Library from "./features/cources/library/Library";
import LibraryDetails from "./features/cources/cource-details/Library-details";
import Plans from "./features/plans/Plans";
import Otp from "./features/user-management/components/OTP/OTP";
function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:subcategory" element={<SubCategory />} />
          <Route path="/complete-data" element={<Compdata />} />
          <Route path="/user-management/:page" element={<UserManagement />} />
          <Route path="/request-data" element={<RequestData />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/track-your-order" element={<TrackingOrder />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library-details/:id" element={<LibraryDetails />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
