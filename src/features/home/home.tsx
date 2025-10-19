import Navbar from "../../shared/components/navbar/navbar";
import Banner from "./components/banner/Banner";
import Aboutus from "./components/aboutus/Aboutus";
import "./home.scss";
import PharoahLine from "./components/pharoah-line/Pharoah-line";
import ImagesSection from "./components/images-section/Images-section";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <PharoahLine/>
      <div className="body">
        <Aboutus />
        <ImagesSection/>
      </div>
      <PharoahLine/>
    </div>
  );
};

export default Home;
