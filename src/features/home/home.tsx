import Navbar from "../../shared/components/navbar/navbar";
import Banner from "../banner/Banner";
import Aboutus from "../aboutus/Aboutus";
import Footer from "../../shared/components/footer/footer";
import Packages from "../packages/Packages";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <Aboutus />
      <Packages />
      <Footer />
    </div>
  );
};

export default Home;
