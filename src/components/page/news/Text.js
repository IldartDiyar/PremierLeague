import classes from "./Text.module.css";
import news from "./news.json";
import Newnews from "./Newnews";
import { Container } from "react-bootstrap";
export default function Text() {
  return (
    <div className={Container}>
      <h1>News</h1>
      {news.map((newsDetail, index) => {
        return (
          <Newnews
            title={newsDetail.title}
            img={newsDetail.phtLink}
            content={newsDetail.content}
          />
        );
      })}

      <a
        className={classes.premier}
        href="https://www.premierleague.com/news/2425071"
      >
        ©Premier League
      </a>
    </div>
  );
}

