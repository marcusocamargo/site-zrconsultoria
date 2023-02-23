import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";


import Home from './components/Home'
import Contato from './components/Contato'
import Empresa from './components/Empresa'
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/Empresa.js" element={<Empresa/>}  />
        <Route path="/Contato.js" element={<Contato/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;