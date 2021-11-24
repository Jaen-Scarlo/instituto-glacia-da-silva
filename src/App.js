import React, { useState } from 'react';
import './App.css';

import {
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';

import {
	motion,
	AnimatePresence,
} from 'framer-motion';

import NavBar from './components/NavBar/index';
import NavMenu from './components/NavMenu/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Objective from './pages/Objective/index';
import Contact from './pages/Contact/index';

function App() {
	const location = useLocation();
	const [active, setActive] = useState(false);

	return (
		<>
			{!active ? (
				<motion.div className='App'>
					<AnimatePresence>
						<NavBar
							as={motion.nav}
							active={active}
							setActive={setActive}
							key='navbar'
						/>
						<Switch
							as={motion.div}
							location={location}
							key={location.pathname}
						>
							<Route
								path='/'
								exact
								component={Home}
								key={location.key}
							/>
							<Route
								path='/sobre'
								exact
								component={About}
								key={location.key}
							/>
							<Route
								path='/objetivo'
								exact
								component={Objective}
								key={location.key}
							/>
							<Route
								path='/contato'
								exact
								component={Contact}
								key={location.key}
							/>
						</Switch>
					</AnimatePresence>
				</motion.div>
			) : (
				<NavMenu
					key='navMenu'
					active={active}
					setActive={setActive}
				/>
			)}
		</>
	);
}

export default App;
