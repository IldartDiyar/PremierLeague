import { Carousel } from "react-bootstrap";
import salah from "../../img/Salah.jpg";
import klopp from "../../img/klopp.jpg";
import epl from "../../img/epl.jpg";

export default function Slideshow() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img  src={salah} alt="Salah" />
          <Carousel.Caption>
            <h3>Salah</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={klopp} alt="Salah" />
          <Carousel.Caption>
            <h3>Klopp</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  src={epl} alt="Salah" />
          <Carousel.Caption>
            <h3>Premier Legue</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
