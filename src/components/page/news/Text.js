import classes from "./Text.module.css";
import Salah from '../../img/Salah.jpg'
export default function Text() {
  return (
    <div className={classes.center}>
        <img src={Salah} alt={"Salah"} className={classes.img}/>
      <p>
        Nearly four million managers suffered the rare disappointment of <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%85%D0%B0%D0%BC%D0%BC%D0%B5%D0%B4_%D0%A1%D0%B0%D0%BB%D0%B0%D1%85">Mohamed
        Salah</a> (£13.0m) blanking as captain, after the most-popular armband pick
        in <span className={classes.red}>Fantasy Premier League</span> Gameweek 20 had a penalty saved on his way to
        zero points. For the 17th occasion this season and the 23rd time in
        2021, Liverpool's top scorer was selected as the most-popular captain.
        Ahead of <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%B2%D0%B5%D1%80%D0%BF%D1%83%D0%BB%D1%8C_(%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D1%83%D0%B1)">Liverpool's</a> 1-0 loss at Leicester City, Salah had racked up his
        highest-ever tally of 170 points from the opening 19 Gameweeks, thanks
        to 15 goals and 10 assists. It's a blank for the third Gameweek in
        succession for the Egyptian, who didn't play in Gameweek 19 after the
        Reds' home match against Leeds United was postponed due to COVID-19. His
        ownership had fallen from 73.6 per cent, an all-time high, to 65.4,
        resulting in a price drop.
      </p>
      <a className={classes.premier}href="https://www.premierleague.com/news/2425071">©Premier League</a>
    </div>
  );
}
