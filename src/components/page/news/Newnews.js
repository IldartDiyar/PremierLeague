import classes from "./Text.module.css";
export default function Text(props) {
  return (
    <div>
      <div className={classes.newses}>
        <h2>{props.title}</h2>
        <img src={props.img} />
        <p>{props.content}</p>
      </div>
    </div>
  );
}
