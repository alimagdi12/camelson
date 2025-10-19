import "./banner.scss";
import { bannerImage, bottomline } from "../../assets";

const Banner = () => {
  return (
    <div className="banner">
      <div className="image-box">
        <img src={bannerImage} alt="" />{" "}
        <div className="text-box">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <button>Start Learning</button>
        </div>
      </div>
      <div className="buttom">
        <img src={bottomline} alt="bttom-divider" />
      </div>
    </div>
  );
};

export default Banner;
