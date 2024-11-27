import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Layout = ({children}) => {
	return (
		<div className="d-flex flex-column">
			<Navbar/>
			<div className="d-flex justify-content-center align-items-center">
				{children}
			</div>
			<Footer/>
		</div>

	);
};

export default Layout;
