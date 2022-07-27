import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import {Main} from './pages/Main'; 


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Main/>}/> 
        {/* q/a */}
        {/*embed*/}
      </Routes>
    </Router>
    
  )
}

export default App
