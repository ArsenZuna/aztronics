import React from 'react';
import Routes from "./routes/Routes.jsx";
import Navbar from "./partials/Navbar.jsx";

const App = () => {
	return (
		<>
			<div className='bg-gray-900 overflow-hidden'>
				<Routes/>
			</div>
		</>
	)
};

export default App;