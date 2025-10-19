import Navbar from "../../shared/components/navbar/navbar";
import Banner from "../banner/Banner";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
