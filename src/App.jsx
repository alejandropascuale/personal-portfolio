import React, { useState } from 'react'

import './App.scss';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import TopBar from './components/topbar/TopBar';
import Works from './components/works/Works';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
