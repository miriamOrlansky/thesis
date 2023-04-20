import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import Resume from './pages/resume';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/play' element={<Play/>} />
		<Route path='/resume' element={<Resume/>} />
	</Routes>
	</Router>
);
}

export default App;
