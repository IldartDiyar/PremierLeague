import classes from "./Text.module.css";
import news from "./news.json";
import Newnews from "./Newnews";
import { Container } from "react-bootstrap";
export default function Text() {
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">News</h1>
      {news.map((newsDetail, index) => {
        return (
          <Newnews
            title={newsDetail.title}
            img={newsDetail.phtLink}
            content={newsDetail.content}
          />
        );
      })}

      <p
        className="text-center mt-4 mb-4"
        href="https://www.premierleague.com/news/2425071"
      >
        ©Premier League
      </p>
    </div>
  );
}
