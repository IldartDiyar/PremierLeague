import { Carousel } from "react-bootstrap";
import salah from "../../img/Salah.jpg";
import klopp from "../../img/klopp.jpg";
import epl from "../../img/epl.jpg";
const data = [
  {
    header: "Salah",
    image: salah,
    text: "Best player"
  },
  {
    header: "Klopp",
    image: klopp,
    text: "Best coach"
  },
  {
    header: "Epl",
    image: epl,
    text: "GG"
  },
];

export default function Slideshow() {
  return (
    <div>
      <Carousel>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="w-500"
                src={slide.image}
                alt={slide.header}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
