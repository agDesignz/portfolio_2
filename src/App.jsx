import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavButton from "./components/NavButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <NavButton /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
