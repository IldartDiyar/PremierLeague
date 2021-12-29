import Ttable from "./components/Ttable";
import Text from "./components/Text";
import classes from "./index.module.css";


function App() {
  return (
    <div className={classes.center}>
    <div>
      <div>
        <h1>Premier League Table</h1>
      </div>
      <div>
        <Ttable />
      </div>
    </div>
    <div>
      <h2>Latest News</h2>
    <Text/>
    </div>
    </div>

  );
}

export default App;
