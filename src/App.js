import './App.css';
import About from './pages/About';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App2 from './Review/review';
import About2 from './pages/About2';
import About3 from './pages/About3';
import About4 from './pages/About4';
import About5 from './pages/About5';
import About6 from './pages/About6';
import About7 from './pages/About7';
import About8 from './pages/About8';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        <Route path="/about4" element={<About4 />} />
        <Route path="/about5" element={<About5 />} />
        <Route path="/about6" element={<About6 />} />
        <Route path="/about7" element={<About7 />} />
        <Route path="/about8" element={<About8 />} />
        <Route path="/Review" element={<App2 />} />
      </Routes>
    </Router>
  );
}

export default App;