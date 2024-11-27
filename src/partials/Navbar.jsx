import React, { useState } from "react";
import AZtronics from "../../public/assets/AZtronics_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/variants.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useCart } from "../utils/CartContext.jsx";

const Navbar = () => {
	const { cartItems } = useCart();
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const goToHomepage = (e) => {
		e.preventDefault();
		navigate("/");
		setMenuOpen(false);
	};

	const goToProducts = (e) => {
		e.preventDefault();
		navigate("/products");
		setMenuOpen(false);
	};

	const goToCart = () => {
		navigate("/shoppingcart");
		setMenuOpen(false);
	};

	return (
		<nav>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
				<a className="flex items-center space-x-3 rtl:space-x-reverse">
					<motion.img
						variants={fadeIn("right")}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.2 }}
						id="logo"
						src={AZtronics}
						className="w-32 h-16 cursor-pointer"
						alt="AZtronics Logo"
						onClick={goToHomepage}
					/>
				</a>
				<button
					onClick={toggleMenu}
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={menuOpen}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<motion.div
					variants={fadeIn("left")}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.2 }}
					className={`${
						menuOpen ? "block" : "hidden"
					} w-full md:block md:w-auto`}
					id="navbar-default"
				>
					<ul className="cursor-pointer font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<p
								onClick={goToHomepage}
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								aria-current="page"
							>
								Home
							</p>
						</li>
						<Link to="deals" smooth={true} duration={500} spy={true} offset={-100}>
							<p onClick={goToHomepage} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								Deals
							</p>
						</Link>
						<li>
							<p onClick={goToProducts} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								Products
							</p>
						</li>
						<Link
							to="contact"
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
						>
							<p onClick={goToHomepage} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								Contact
							</p>
						</Link>
						<li>
							<p onClick={goToCart} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								<FontAwesomeIcon icon={faCartShopping} />
								{cartItems.length > 0 && (
									<span className="absolute h-3 w-3 bg-red-600 rounded-full"></span>
								)}
							</p>
						</li>
					</ul>
				</motion.div>
			</div>
		</nav>
	);
};

export default Navbar;