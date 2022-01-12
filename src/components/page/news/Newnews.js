import classes from "./Text.module.css";
import { Card} from "react-bootstrap";
export default function Text(props) {
  return (
    <div className={classes.newses}>
      <Card style={{ width: '75rem' }}>
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
  // <div>
    //   <div className={classes.newses}>
    //     <h2>{props.title}</h2>
    //     <img src={props.img} />
    //     <p>{props.content}</p>
    //   </div>
    // </div>