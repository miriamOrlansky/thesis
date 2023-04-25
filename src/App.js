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
document.body.style.backgroundColor = color;

return (
	<Router>
	            <Nav>
					<NavMenu>
           
                  <NavLink to="/" onClick={() => changeColor("#F1F1F1")}>
                    Work
                  </NavLink>
               
                  <NavLink
                    to="/play"
                    onClick={() => changeColor("#2D343B")}
                  >
                    Play
                  </NavLink>
                
                  <NavLink
                    to="/resume"
                    onClick={() => changeColor("#F5E7E1")}
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
