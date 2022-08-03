import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Embed from "./components/Embed";
import QA from './pages/QA'; 
import Home from "./pages/Home";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/qa" element={<QA/>}/> 
        <Route path="embed/:userName" element={<Embed/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
