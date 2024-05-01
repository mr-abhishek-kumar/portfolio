import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/portfolio" element={<Home/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/experiance" element={<WorkExperience/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
