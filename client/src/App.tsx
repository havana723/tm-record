import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
};

export default App;
