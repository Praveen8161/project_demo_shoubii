import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import Career from "./Pages/Career";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <>
        <NavBar />
      </>

      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </main>

      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
