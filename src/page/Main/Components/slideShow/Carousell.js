import React from "react";
import { Carousel, Row } from "react-bootstrap";
import styles from "./Carousell.module.css";

class Carousell extends React.Component {
  render() {
    return (
      <Row>
        <Carousel>
          <Carousel.Item style={{'height': '700px'}}>
            <img
              alt="900x500"
              src={require('./img/MC.jpg')}
              className={styles.carouselImage}
            />
          </Carousel.Item>
          <Carousel.Item style={{'height': '700px'}}>
            <img
              alt="900x500"
              src={require('./img/Cup.jpg')}
              className={styles.carouselImage}
            />
          </Carousel.Item >
          <Carousel.Item style={{'height': '700px'}}>
            <img
              alt="900x500"
              src={require('./img/champion.webp')}
              className={styles.carouselImage}
            />
            
          </Carousel.Item>
        </Carousel>
      </Row>
    );
  }
}

export default Carousell;
