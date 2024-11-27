import React from "react";
import Hero from "../components/Hero.jsx";
import PopularProducts from "../components/PopularProducts.jsx";
import Deals from "../components/Deals.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Partners from "../components/Partners.jsx";
import Layout from "../partials/Layout.jsx";

const Home = () => {
	return (
		<>
			<Layout>
			<Hero/>
			<div className="bg-blue-100">
				<PopularProducts/>
				<Partners/>
				<section id="deals"><Deals/></section>
				<section id="contact"><Newsletter/></section>
			</div>
			</Layout>
		</>
	)
};

export default Home;