import Footer from "./Components/Footer/Footer";
import NaviBar from "./Components/NaviBar/NaviBar";
import News from "./page/Nnews/News";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Ttable from "./page/Ttable/Ttable";
import Review from "./page/Rreview/Review";
import Main from "./page/Main/Main";

function App() {
  return (
    <div>
      <NaviBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/table" element={<Ttable />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
