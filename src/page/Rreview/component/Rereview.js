import { useState } from "react/cjs/react.development";
import { FaStar } from "react-icons/fa";
import { Button, Form, Alert } from "react-bootstrap";
export default function Review() {
  const [output, setOutput] = useState(false);
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

  if (output) {
    return (
      <Alert variant="success" className="text-center" onClose={() => setOutput(false)} dismissible>
        Thank you for your review
      </Alert>
    );
  }
  return (
    <div className="container">
      <h1>Share your thougth about premier legue</h1>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3">
            <StarRating totalStars={5} />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => setOutput(true)}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
