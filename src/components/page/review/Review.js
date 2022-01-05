import { FaStar } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import classes from "./review.module.css";
import { Button, Container } from "react-bootstrap";
export default function Review() {
  const createArray = (length) => [...Array(length)];
  function Star({ selected = false, OnSelect }) {
    return <FaStar color={selected ? "red" : "gray"} onClick={OnSelect} />;
  }

  function StarRating({ totalStars }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            OnSelect={() => setSelectedStars(i + 1)}
          />
        ))}
        <div></div>
      </div>
    );
  }

  return (
    <div className={Container}>
      <div className={classes.center}>
        <form>
          <div>
            <label>Name: </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Rating</label>
            <br />
            <StarRating totalStars={10} />
          </div>
          <div>
            <labe>Text</labe>
            <br />
            <textarea />
          </div>
          <div>
            <Button variant="primary">Primary</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
