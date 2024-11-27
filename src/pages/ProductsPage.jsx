import React from "react";
import Products from "../components/Products.jsx";
import Navbar from "../partials/Navbar.jsx";
import Footer from "../partials/Footer.jsx";
import Layout from "../partials/Layout.jsx";

const ProductsPage = () => {
	return (
		<>
			<Layout>
				<section className="bg-white"><Products/></section>
			</Layout>
		</>
	)
}

export default ProductsPage;