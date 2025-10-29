import PharoahLine from "../pharoah-line/Pharoah-line";
import "./banner.scss";
const Banner = () => {
  return (
    <>
    <div className="banner-section">
      <div className="banner">
        <div className="text-box">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit,{" "}
          </p>
          <button>Start Learning</button>
        </div>
      </div>
      <PharoahLine/>
    </div>
    </>
  );
};

export default Banner;
