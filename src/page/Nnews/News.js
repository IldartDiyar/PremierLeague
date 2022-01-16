import news from "./news.json";
import Cardos from "./Cardos";
import { Container } from "react-bootstrap";
export default function News() {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">News</h1>
      {news.map((newsDetail, index) => {
        return (
          <Cardos
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
