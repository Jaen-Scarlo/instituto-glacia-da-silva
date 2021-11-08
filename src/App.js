import React, { useState } from 'react';
import './App.css';

import {
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

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
		<AnimatePresence exitBeforeEnter initial={false}>
			{!active ? (
				<div className='App'>
					<NavBar
						active={active}
						setActive={setActive}
					/>
					<Switch
						location={location}
						key={location.pathname}
					>
						<Route path='/' exact component={Home} />
						<Route path='/sobre' component={About} />
						<Route
							path='/objetivo'
							component={Objective}
						/>
						<Route
							path='/contato'
							component={Contact}
						/>
					</Switch>
				</div>
			) : (
				<NavMenu
					key='navMenu'
					active={active}
					setActive={setActive}
				/>
			)}
		</AnimatePresence>
	);
}

export default App;
