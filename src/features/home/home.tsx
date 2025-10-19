import Navbar from "../../shared/components/navbar/navbar";
import Banner from "../banner/Banner";
import Aboutus from "../aboutus/Aboutus";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <Aboutus />
    </div>
  );
};

export default Home;
