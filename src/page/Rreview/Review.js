import SliderShow from "./component/Slider/SliderShow";
import Rereview from "./component/Rereview";

export default function Review() {
  return (
    <div className="container">
      <div>
        <Rereview />
      </div>
      <div className="d-flex justify-content-center">
        <SliderShow/>
      </div>
    </div>
  );
}
