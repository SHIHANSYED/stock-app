import { ChartPage } from "./Pages/ChartPage";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
