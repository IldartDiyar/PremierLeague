import { Card, Container} from "react-bootstrap";
export default function Text(props) {
  return (
    <div className={Container}>
      <Card>
      <Card.Header as="h2">{props.title}</Card.Header>
        <Card.Img variant="top" src={props.img}  className="justify-content-center" />
        <Card.Body>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  
  );
}