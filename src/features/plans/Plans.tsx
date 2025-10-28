import "./plans.scss";
import "../home/components/packages/packages.scss";
import PharoahLine from "../../shared/components/pharoah-line/Pharoah-line";
import Packages from "../home/components/packages/Packages";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <Packages showAll />
      <PharoahLine />
    </div>
  );
};

export default Plans;
