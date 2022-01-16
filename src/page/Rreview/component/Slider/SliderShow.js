import { Carousel } from "react-bootstrap";
import Cardos from "./Cardos";
import "./Carusel.css";
const data = [
    {
      name: "Diyar",
      text: "Fugiat consectetur Lorem magna fugiat et Lorem id.",
      star: 5,
    },
    { 
      name: "Dias",
      text: "Et amet magna eu et tempor quis do tempor.",
      star: 3,
    },
    {
      name: "Alisher",
      text: "Labore enim cupidatat qui incididunt veniam aliquip est voluptate cillum in id in labore.",
      star: 2,
    },
  ];
  export default function SliderShow()
  {
      return (
        <div class="col-lg-4 d-flex align-items-stretch">
             <Carousel >
                 {data.map((slide,i)=>{
                     return(
                         <Carousel.Item className="layer">
                             <Cardos name={slide.name} content={slide.text} stars={slide.star}/>
                         </Carousel.Item>
                     );
                 })}
             </Carousel>
         </div>
      );
  }