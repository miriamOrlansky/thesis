import React from 'react';
import { Nav, NavLink, NavMenu } 
    from "./components/NavbarElements";
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import Resume from './pages/resume';
import { useState } from 'react';

function App() {
const [color, changeColor] = useState("#F1F1F1");
const [textColor, setTextColor] = useState("#2D343B")
document.body.style.backgroundColor = color;


return (
	<Router>
	  <Nav >
			<NavMenu>
        <NavLink to="/" TheColor={textColor} onClick={() => { changeColor("#F5E7E1"); setTextColor("#2D343B")}}>
          Work
        </NavLink>
        <NavLink
          to="/play"
          TheColor={textColor}
          onClick={() => { changeColor("#2D343B"); setTextColor("#f1f1f1")}}
        >
          Play
        </NavLink>
        <NavLink
          to="/resume"
          TheColor={textColor}
          onClick={() => { changeColor("#F5E7E1"); setTextColor("#2D343B")}}
        >
          Resume
        </NavLink>
                
      </NavMenu>
    </Nav>
	
	<Routes>
		<Route exact path='/' element={<Home />}  />
		<Route path='/play' element={<Play/>} />
		<Route path='/resume' element={<Resume/>} />
	</Routes>
	</Router>
);
}

export default App;
