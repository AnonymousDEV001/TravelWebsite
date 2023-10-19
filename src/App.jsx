import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotels from "./Pages/Hotels";
import ContactUs from "./Pages/ContatctUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels />} />
          <Route path={"/contactUs"} element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
