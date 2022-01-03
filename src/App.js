import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Ttable from "./components/page/table/Ttable";
import Text from "./components/page/news/Text";
import Main from "./components/page/main/Main";
import Review from "./components/page/review/Review";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/table" element={<Ttable />} />
        <Route path="/text" element={<Text />} />
        <Route path="/review" element={<Review/>} />
      </Routes>
    </div>
  );
}

export default App;
