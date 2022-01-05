import { Route, Routes } from "react-router-dom";
import Navi from "./components/page/navbar/Navi";
import Ttable from "./components/page/table/Ttable";
import Text from "./components/page/news/Text";
import Main from "./components/page/main/Main";
import Review from "./components/page/review/Review";

function App() {
  return (
    <div>
      <Navi />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/table" element={<Ttable />} />
        <Route path="/news" element={<Text />} />
        <Route path="/review" element={<Review/>} />
      </Routes>
    </div>
  );
}

export default App;
