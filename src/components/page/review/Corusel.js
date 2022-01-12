import { Carousel } from "react-bootstrap";
import classes from "./review.module.css";
import Cardos from "./Cardos";
const data = [
  {
    name: "Diyar",
    text: "Fugiat consectetur Lorem magna fugiat et Lorem id.",
    star: 5,
  },
  {
    header: "Dias",
    text: "Et amet magna eu et tempor quis do tempor.",
    star: 3,
  },
  {
    header: "Alisher",
    text: "Labore enim cupidatat qui incididunt veniam aliquip est voluptate cillum in id in labore.",
    star: 2,
  },
];

export default function Corusel() {
  return (
    <div >
      <Carousel>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <Cardos name={slide.name} content={slide.text} stars={slide.star}/>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
