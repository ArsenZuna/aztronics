import React from "react";
import {useCart} from "../utils/CartContext.jsx";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";

const ShoppingCart = () => {
	const navigate = useNavigate();
	const {cartItems, removeFromCart} = useCart();

	const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

	const totalDiscount = cartItems.reduce((total, item) => {
		if (item.discountedPrice && item.discountedPrice !== item.price) {
			return total + (item.price - item.discountedPrice);
		}
		return total;
	}, 0);

	const total = subtotal - totalDiscount;

	const handleOrderSubmit = (e) => {
		e.preventDefault();
		setTimeout(() => {
			alert("Order placed successfully!");
		}, 1000);
		navigate("/");
	}

	return (
		<section className="bg-white py-8 antialiased md:py-16">
			<div className="mx-auto max-w-screen-xl px-4 2xl:px-0 mb-8">
				<h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

				{cartItems.length > 0 ? (
					<div
						className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
						<motion.div
							variants={fadeIn("right")}
							initial="hidden"
							whileInView={"show"}
							viewport={{once: false, amount: 0.2}}
							className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
							<div className="space-y-6">
								{cartItems.map((item, index) => (
									<div
										key={index}
										className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 md:p-6"
									>
										<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
											<img
												className="h-20 w-20 rounded-lg object-cover"
												src={item.image}
												alt={item.name}
											/>
											<div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
												<p className="text-base font-medium text-gray-900 dark:text-white">{item.name}</p>
												<p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.description}</p>
											</div>
											<div className="text-end md:order-4 md:w-32">
												{item.discountedPrice && item.discountedPrice !== item.price ? (
													<div>
														<p className="text-sm line-through text-red-600">
															${item.price.toFixed(2)}
														</p>
														<p className="text-base font-bold text-white">
															${item.discountedPrice.toFixed(2)}
														</p>
													</div>
												) : (
													<p className="text-base font-bold text-gray-900 dark:text-white">
														${item.price.toFixed(2)}
													</p>
												)}
											</div>
											<button
												className="text-sm font-medium text-red-600 hover:underline dark:text-red-500 md:order-5"
												onClick={() => removeFromCart(index)}
											>
												Remove
											</button>
										</div>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							variants={fadeIn("left")}
							initial="hidden"
							whileInView={"show"}
							viewport={{once: false, amount: 0.2}}
							className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
							<div
								className="space-y-3 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6">
								<p className="text-xl font-semibold text-gray-900 dark:text-white m-3 lg:m-1">Order summary</p>
								<dl className="flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700 m-3 lg:m-1">
									<dt className="text-sm text-gray-900 dark:text-white">Subtotal</dt>
									<dd className="text-sm text-gray-900 dark:text-white">
										${subtotal.toFixed(2)}
									</dd>
								</dl>
								<dl className="flex items-center justify-between m-3 lg:m-1">
									<dt className="text-sm text-gray-900 dark:text-white">Discounts</dt>
									<dd className="text-sm text-red-600 dark:text-red-400">
										-${totalDiscount.toFixed(2)}
									</dd>
								</dl>
								<dl className="flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700 m-3 lg:m-1">
									<dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
									<dd className="text-base font-bold text-gray-900 dark:text-white">
										${total.toFixed(2)}
									</dd>
								</dl>
								<form className="space-y-3 border-t border-gray-200 pb-4 m-3 lg:m-1">
									<div className="pt-4 grid gap-6 mb-6 md:grid-cols-2">
										<div>
											<label htmlFor="first_name"
														 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
											<input type="text" id="first_name"
														 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														 placeholder="John" required/>
										</div>
										<div>
											<label htmlFor="last_name"
														 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
											<input type="text" id="last_name"
														 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														 placeholder="Doe" required/>
										</div>
									</div>
									<div>
										<label htmlFor="address"
													 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
										<input type="text" id="address"
													 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													 placeholder="Baker St. 123" required/>
									</div>
									<div className="pb-4 grid gap-6 mb-6 md:grid-cols-2">
										<div>
											<label htmlFor="city"
														 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
											<input type="text" id="city"
														 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														 placeholder="London" required/>
										</div>
										<div>
											<label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
												Number</label>
											<input type="text" id="phone"
														 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														 placeholder="+XXXXXXXXXXXX" required/>
										</div>
									</div>
									<div className="flex items-center mb-4">
										<input disabled id="disabled-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
											<label htmlFor="disabled-checkbox" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Pay by card</label>
									</div>
									<div className="flex items-center">
										<input disabled checked id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-green-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-green-700 dark:border-gray-600"/>
											<label htmlFor="disabled-checked-checkbox" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Pay by cash when delivered</label>
									</div>
									<button onClick={handleOrderSubmit}
										className="flex w-full items-center justify-center rounded-lg mt-4 py-2 bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"
									>
										Order Now
									</button>
								</form>
							</div>
						</motion.div>
					</div>
				) : (
					<p className="mt-6 text-center text-lg text-gray-500 dark:text-gray-400">
						Your cart is empty. <a href="/" className="text-primary-700 hover:underline">Continue Shopping</a>
					</p>
				)}
			</div>
		</section>
	);
};

export default ShoppingCart;
