import './App.css';
import About from './pages/About';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App2 from './Review/review';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Review" element={<App2 />} />
      </Routes>
    </Router>
  );
}

export default App;