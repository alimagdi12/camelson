import Banner from "./components/banner/Banner";
import Aboutus from "./components/aboutus/Aboutus";
import "./home.scss";
import PharoahLine from "../../shared/components/pharoah-line/Pharoah-line";
import ImagesSection from "./components/images-section/Images-section";
import Packages from "./components/packages/Packages";
import CustomSwiper from "./components/swiper/Swiper";
const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <PharoahLine/>
      <div className="body">
        <Aboutus />
        <ImagesSection/>
        <PharoahLine/>
        <CustomSwiper/>
        <Packages/>
      </div>
    </div>
  );
};

export default Home;
