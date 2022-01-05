import { Container } from "react-bootstrap";
import classes from "./main.module.css";
import Slideshow from "./Slideshow";
export default function Main() {
  return (
    <div className={Container}>
      <Slideshow />
    </div>
  );
}
