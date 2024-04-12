import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./home/Home";
import Aptitude from "./home/aptitude/Aptitude";
import Contact from "./home/contact/Contact";
import About from "./home/about/About";
import FormBox from "./login/FormBox";
import Footer from "./footer/Footer";
import QuizApp from "./QuizApp/QuizApp";
import RandomQus from "./randomquiz/RandomQus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aptitude" element={<Aptitude />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FormBox" element={<FormBox />} />
          <Route
            path="/ProblemsOnTrains"
            element={<QuizApp category="ProblemsOnTrains" />}
          />
          <Route
            path="/HeightAndDistance"
            element={<QuizApp category="HeightAndDistance" />}
          />
          <Route
            path="/SimpleInterest"
            element={<QuizApp category="SimpleInterest" />}
          />
          <Route
            path="/ProfitAndLoss"
            element={<QuizApp category="ProfitAndLoss" />}
          />
          <Route
            path="/Percentage"
            element={<QuizApp category="Percentage" />}
          />
          <Route
            path="/TimeAndDistance"
            element={<QuizApp category="TimeAndDistance" />}
          />
          <Route
            path="/TimeAndWork"
            element={<QuizApp category="TimeAndWork" />}
          />
          <Route
            path="/CompoundInterest"
            element={<QuizApp category="CompoundInterest" />}
          />
          <Route
            path="/Partnership"
            element={<QuizApp category="Partnership" />}
          />
          <Route
            path="/ProblemsOnAges"
            element={<QuizApp category="ProblemsOnAges" />}
          />
          <Route
            path="/RandomQus"
            element={<RandomQus category="Aptitude" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
