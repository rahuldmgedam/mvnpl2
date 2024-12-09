import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import CoalSiteSelector from "./pages/CoalSiteSelector ";
import Login from "./pages/Login";
import DoMaster from "./pages/DoMaster";
import SourceMaster from "./components/DoMaster/SourceMaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<CoalSiteSelector />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/doMaster" element={<DoMaster/>}/>

        <Route path="/source" element={<SourceMaster/>}/>
      </Routes>
    </Router>
  );
}

export default App;
