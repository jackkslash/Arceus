import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Embed from "./components/Embed";
import NavigationBar from "./components/NavigationBar";
import {Main} from './pages/Main'; 


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Main/>}/> 
        <Route path="embed/:userName" element={<Embed/>}/>
        {/* q/a */}
        {/*embed*/}
      </Routes>
    </Router>
    
  )
}

export default App
