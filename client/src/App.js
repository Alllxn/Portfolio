import React from "react";
import "./App.css";
import Nav from './PortfolioContainer/Nav/Nav';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/About/About';
import Work from './PortfolioContainer/Work/Work';
import Contact from './PortfolioContainer/Contact/Contact';
import Timeline from './PortfolioContainer/Timeline/Timeline';
import './assets/fontawesome';

function App() {
  return (
    <div className="App" id="App">
      <Nav/>
      <Home/>
        <main>
          <About/>
          <Timeline/>
          <Work/>
          <Contact/>
        </main>
    </div>
  );
}

export default App;