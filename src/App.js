import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { FetchData } from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes basename="/index.html">
        <Route exact path={"/Home"} element={<Home />} />
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/FetchData"} element={<FetchData />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
