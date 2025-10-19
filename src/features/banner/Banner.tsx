import "./banner.scss";
import { bannerImage } from "../../assets";
const Banner = () => {
  return (
    <div className="banner">
      <div className="image-box">
        <img src={bannerImage} alt="" />{" "}
        <div className="text-box">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <button>Start Learning</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
