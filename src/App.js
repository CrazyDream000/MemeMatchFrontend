import logo from './logo.svg';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import MemeLanding  from './pages/MemeLanding';
import LaunchPad  from './pages/LaunchPad';
import MainPage  from './pages/MainPage';
import CoinLists from './pages/CoinLists';
import {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinOverview from './pages/CoinOverview';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}></Route>
          <Route path="/coinlists" element={<CoinLists/>}></Route>
          <Route path="/coinoverview/:id" element={<CoinOverview/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
