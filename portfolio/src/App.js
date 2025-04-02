import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greet from "./components/Greet";
import Home from "./components/home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Greet />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
