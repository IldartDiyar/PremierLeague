import Ttable from "./components/Ttable";
import classes from "./index.module.css";


function App() {
  return (
    <div className={classes.center}>
      <div>
        <h1>Premier League</h1>
      </div>
      <div>
        <Ttable />
      </div>
    </div>
  );
}

export default App;
