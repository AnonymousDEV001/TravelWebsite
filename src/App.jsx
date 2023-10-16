import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotels from "./Pages/Hotels";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
