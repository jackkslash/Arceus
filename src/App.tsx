import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Embed from "./components/Embed";
import {Main} from './pages/Main'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/> 
        <Route path="embed/:userName" element={<Embed/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
