import React from 'react';
import {Root, Nav, NavLink } 
    from "./components/NavbarElements";
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import Resume from './pages/resume';
import Clef from './pages/clef';
import Graphics from './pages/graphics';
import Notee from './pages/notee'; 
import FridgIt from './pages/fridgit';
import Footer from './components/Footer';

import { useState } from 'react';

function App() {
const [color, setColor] = useState("#F1F1F1");


const [textColor, setTextColor] = useState("#2D343B")



return (
  <Root backColor={color}>
	<Router>
	  <Nav>
        <NavLink to="/" TheColor={textColor} onClick={() => { setColor("#F5E7E1"); setTextColor("#2D343B")}}>
          Work
        </NavLink>
        <NavLink
          to="/play"
          TheColor={textColor}
          onClick={() => { setColor("#2D343B"); setTextColor("#f1f1f1")}}
        >
          Play
        </NavLink>
        <NavLink
          to="/resume"
          TheColor={textColor}
          onClick={() => { setColor("#F5E7E1"); setTextColor("#2D343B")}}
        >
          Resume
        </NavLink>
    </Nav>
	
	<Routes>
		<Route exact path='/' element={<Home />}  />
		<Route path='/play' element={<Play/>} />
		<Route path='/resume' element={<Resume/>} />
    <Route path='/notee' element={<Notee/>} />
    <Route path='/fridg-it' element={<FridgIt/>} />
    <Route path='/graphics' element={<Graphics/>} />
    <Route path='/clef' element={<Clef/>} />
	</Routes>
	</Router>
  <Footer/>
  </Root>
);
}

export default App;
