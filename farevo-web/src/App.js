import logo from './logo.svg';
import './App.css';
import "./style.css";
import Preloader from "../src/components/Pre";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';
import { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop/>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
