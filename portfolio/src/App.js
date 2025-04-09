import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greet from "./components/Greet";
import Home from "./components/home";
import Skill from "./components/skill";
import Work from "./components/work";
import Resume from "./components/Resume";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Greet />} />
                <Route path="/home" element={<Home />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/work" element={<Work />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App;
