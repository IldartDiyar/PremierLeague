import { Container } from "react-bootstrap";
import classes from "./main.module.css";
import Slideshow from "./Slideshow";
export default function Main() {
  return (
    <div className="d-flex justify-content-center">
        <Slideshow />
    </div>
  );
}
