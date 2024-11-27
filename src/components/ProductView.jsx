import React, {useState, useEffect} from "react";
import {Rating} from "@mui/material";
import {useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";
import {useCart} from "../utils/CartContext.jsx";

const ProductView = () => {
	const {addToCart} = useCart();
	const location = useLocation();
	const selectedProduct = location.state?.product;

	if (!selectedProduct) {
		return <p className="text-center text-gray-500">Product not found</p>;
	}

	const discountedPrice = selectedProduct.discount
		? selectedProduct.price > 1000
			? selectedProduct.price - 100
			: selectedProduct.price > 700
				? selectedProduct.price - 70
				: selectedProduct.price - 50
		: null;

	const handleAddToCart = () => {
		addToCart(selectedProduct);
		setTimeout(() => {
			alert("Item added to cart, had to checkout!");
		}, 200);
	}

	return (
		<>
			<div className="bg-gray-200">
				<div className="pt-4">
					{/* Image gallery */}
					<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
						<motion.img
							variants={fadeIn("right")}
							initial="hidden"
							whileInView={"show"}
							viewport={{once: false, amount: 0.2}}
							src={selectedProduct.fourthImage}
							alt={selectedProduct.name}
							className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"/>
						<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
							<motion.img
								variants={fadeIn("down")}
								initial="hidden"
								whileInView={"show"}
								viewport={{once: false, amount: 0.2}}
								src={selectedProduct.secondImage}
								alt={selectedProduct.name}
								className="aspect-[3/2] size-full rounded-lg object-cover"/>
							<motion.img
								variants={fadeIn("up")}
								initial="hidden"
								whileInView={"show"}
								viewport={{once: false, amount: 0.2}}
								src={selectedProduct.thirdImage}
								alt={selectedProduct.name}
								className="aspect-[3/2] size-full rounded-lg object-cover"/>
						</div>
						<motion.img
							variants={fadeIn("left")}
							initial="hidden"
							whileInView={"show"}
							viewport={{once: false, amount: 0.2}}
							src={selectedProduct.image}
							alt={selectedProduct.name}
							className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"/>
					</div>

					{/* Product info */}
					<motion.div
						variants={fadeIn("up")}
						initial="hidden"
						whileInView={"show"}
						viewport={{once: false, amount: 0.3}}
						className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
						<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
							<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{selectedProduct.name}</h1>
						</div>

						{/* Options */}
						<div className="mt-4 lg:row-span-3 lg:mt-0">
							<h2 className="sr-only">Product information</h2>
							<p className="text-3xl tracking-tight text-gray-900">
								{discountedPrice && (
									<span className="text-sm text-gray-500 line-through mr-2">${selectedProduct.price.toFixed(2)}</span>
								)}
								${discountedPrice ? discountedPrice.toFixed(2) : selectedProduct.price.toFixed(2)}
							</p>

							{/* Reviews */}
							<div className="mt-6">
								<h3 className="sr-only">Reviews</h3>
								<div className="flex items-center">
									<Rating name="read-only" value={selectedProduct.rating} readOnly size="small"/>
									<a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">777 reviews</a>
								</div>
							</div>

							<div className="mt-10">
								<div>
									<h2 className="font-bold text-md">Colors</h2>
								</div>
								<div>
									<fieldset aria-label="Choose a size" className="mt-4">
										<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-3">
											{/* Active: "ring-2 ring-indigo-500" */}
											<label
												className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
												<input type="radio" name="size-choice" value="Rose" disabled className="sr-only"/>
												<span>Rose Gold</span>
												<span aria-hidden="true"
															className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
													<svg className="absolute inset-0 size-full stroke-2 text-gray-200" viewBox="0 0 100 100"
															 preserveAspectRatio="none" stroke="currentColor">
														<line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke"/>
													</svg>
												</span>
											</label>
											{/* Active: "ring-2 ring-indigo-500" */}
											<label
												className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
												<input type="radio" name="size-choice" value="Grey" className="sr-only"/>
												<span>Space Gray</span>
												{/*
														Active: "border", Not Active: "border-2"
														Checked: "border-indigo-500", Not Checked: "border-transparent"
													*/}
												<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
											</label>
											{/* Active: "ring-2 ring-indigo-500" */}
											<label
												className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
												<input type="radio" name="size-choice" value="Black" className="sr-only"/>
												<span>Black</span>
												{/*
														Active: "border", Not Active: "border-2"
														Checked: "border-indigo-500", Not Checked: "border-transparent"
													*/}
												<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
											</label>
										</div>
									</fieldset>
								</div>
								<button
									type="submit"
									className="mt-4 py-3 w-full bg-indigo-500 text-white rounded-md hover:bg-indigo-400 transition-colors"
									onClick={handleAddToCart}
								>
									Add to cart
								</button>
							</div>
						</div>

						<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
							{/* Description and details */}
							<div>
								<h3 className="sr-only">Description</h3>

								<div className="space-y-6">
									<p className="text-base text-gray-900">{selectedProduct.description}</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	)
};

export default ProductView;