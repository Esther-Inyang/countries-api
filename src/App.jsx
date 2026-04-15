import { Routes, Route } from "react-router-dom";
import SingleCountryPage from "./components/SingleCountryPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<SingleCountryPage />} />
      </Routes>
    </div>
  );
};

export default App;
