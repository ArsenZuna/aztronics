import React, {useState, useEffect} from "react";
import API from "../utils/api.jsx";
import ProductCard from "./ProductCard.jsx";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";

const Products = () => {
	const [openFilter, setOpenFilter] = useState({});
	const [products, setProducts] = useState([]);
	const [sortOpen, setSortOpen] = useState(false);
	const [sortOption, setSortOption] = useState(null);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await API.get("/products.json");
				const productArray = Object.values(response.data).map((product) => {
					if (product.discount) {
						return {
							...product,
							discountedPrice:
								product.price > 1000
									? product.price - 100
									: product.price > 700
										? product.price - 70
										: product.price - 50,
						};
					}
					return product;
				});

				const sortedByName = productArray.sort((a, b) =>
					a.name.localeCompare(b.name)
				);

				setProducts(sortedByName);
				setSortedProducts(sortedByName);
				setFilteredProducts(sortedByName);
			} catch (error) {
				console.error("Error fetching products: ", error);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const handleSort = (option) => {
		setSortOption(option);
		setSortOpen(false);

		const sorted = [...filteredProducts];
		if (option === "Name: A to Z") {
			sorted.sort((a, b) => a.name.localeCompare(b.name));
		} else if (option === "Price: Low to High") {
			sorted.sort(
				(a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price)
			);
		} else if (option === "Price: High to Low") {
			sorted.sort(
				(a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price)
			);
		}

		setSortedProducts(sorted);
	};

	const handleCategoryFilter = (category) => {
		if (category === "Show All") {
			setFilteredProducts(products);
			setSortedProducts(products);
		} else {
			const filtered = products.filter(
				(product) => product.category === category
			);
			setFilteredProducts(filtered);
			setSortedProducts(filtered);
		}
	};

	const toggleFilter = (filter) => {
		setOpenFilter((prev) => ({
			...prev,
			[filter]: !prev[filter],
		}));
	};

	return (
		<>
			<div className="flex flex-col lg:flex-row min-h-screen p-4">
				{/* Sidebar */}
				<motion.aside
					variants={fadeIn("right")}
					initial="hidden"
					whileInView={"show"}
					viewport={{once: false, amount: 0.2}}
					className="w-full lg:w-1/4 border-b-2 lg:border-r-2 border-gray-400 p-4">
					{/* Filters */}
					<div className="mt-2 lg:mt-10">
						{["Category"].map((filter) => (
							<div key={filter} className="mb-4">
								<button
									onClick={() => toggleFilter(filter)}
									className="flex justify-between w-full text-left font-semibold duration-300"
								>
									{filter} <span>{openFilter[filter] ? "-" : "+"}</span>
								</button>
								{openFilter[filter] && (
									<motion.ul
										variants={fadeIn("right")}
										initial="hidden"
										whileInView={"show"}
										viewport={{once: false, amount: 0.2}}
										className="mt-2 ml-2 space-y-2 text-sm text-gray-600">
										{/* "Show All" Category */}
										<li
											className="cursor-pointer font-semibold"
											onClick={() => handleCategoryFilter("Show All")}
										>
											Show All
										</li>
										{[
											...new Set(products.map((product) => product.category)),
										].map((category, index) => (
											<li
												key={index}
												className="cursor-pointer font-semibold"
												onClick={() => handleCategoryFilter(category)}
											>
												{category}
											</li>
										))}
									</motion.ul>
								)}
							</div>
						))}
					</div>
				</motion.aside>

				{/* Main Content */}
				<main
					className="w-full lg:w-3/4 p-4 bg-white">
					<motion.div
						variants={fadeIn("down")}
						initial="hidden"
						whileInView={"show"}
						viewport={{once: false, amount: 0.2}}
						className="flex justify-between items-center mb-6">
						<h2 className="text-3xl font-bold">Products</h2>
						<div className="relative">
							<button
								onClick={() => setSortOpen((prev) => !prev)}
								className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 transition-colors"
							>
								Sort
							</button>
							{sortOpen && (
								<ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded z-50">
									<li
										className="px-4 py-2 cursor-pointer hover:bg-gray-100"
										onClick={() => handleSort("Name: A to Z")}
									>
										Name: A to Z
									</li>
									<li
										className="px-4 py-2 cursor-pointer hover:bg-gray-100"
										onClick={() => handleSort("Price: Low to High")}
									>
										Price: Low to High
									</li>
									<li
										className="px-4 py-2 cursor-pointer hover:bg-gray-100"
										onClick={() => handleSort("Price: High to Low")}
									>
										Price: High to Low
									</li>
								</ul>
							)}
						</div>
					</motion.div>

					{/* Loading and Product Grid */}
					{loading ? (
						<div
							className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mx-auto mt-16">
						</div>
					) : sortedProducts.length === 0 ? (
						<p className="text-center text-gray-500">No products available</p>
					) : (
						<div>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
								{sortedProducts.map((product, index) => (
									<motion.div key={index}
															variants={fadeIn("left")}
															initial="hidden"
															whileInView={"show"}
															viewport={{once: false, amount: 0.2}}
									>
										<ProductCard
											product={product}
											discountedPrice={product.discountedPrice}
										/>
									</motion.div>
								))}
							</div>
						</div>
					)}
				</main>
			</div>
		</>
	);
};

export default Products;