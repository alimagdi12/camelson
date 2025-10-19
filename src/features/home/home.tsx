import Navbar from "../../shared/components/navbar/navbar";
import Banner from "./components/banner/Banner";
import Aboutus from "./components/aboutus/Aboutus";
import "./home.scss";
import PharoahLine from "./components/pharoah-line/Pharoah-line";
import ImagesSection from "./components/images-section/Images-section";
import Footer from "../../shared/components/footer/footer";
import Packages from "./components/packages/Packages";
import CustomSwiper from "./components/swiper/Swiper";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <PharoahLine/>
      <div className="body">
        <Aboutus />
        <ImagesSection/>
        <PharoahLine/>
        <CustomSwiper/>
        <Packages/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
