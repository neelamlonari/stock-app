import './App.css';
import{ Route,Routes} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Nav from "./Components/Nav.js";
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Stock from './Pages/Stock';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/stocks" element={<Dashboard/>}/>
        <Route path = "/stocks:symbol" element={<Stock/>}/>
         <Route path ="/about" element={<About/>}/>
       </Routes>
       </div>

  );
}

export default App;
