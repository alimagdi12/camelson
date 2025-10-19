import "./banner.scss";
import { bottomline } from "../../assets";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="text-box">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
          <button>Start Learning</button>
        </div>
      </div>
      <div className="bottomline">
        <img src={bottomline} alt="" />
      </div>
    </>
  );
};

export default Banner;
