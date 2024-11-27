import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";

const Newsletter = () => {
	return (
		<div
			className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<motion.div
					variants={fadeIn("up")}
					initial="hidden"
					whileInView={"show"}
					viewport={{once: false, amount: 0.2}}
					className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
						<p className="mt-4 text-lg text-gray-300">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						<div className="mt-6 flex max-w-md gap-x-4">
							<label for="email-address" className="sr-only">Email address</label>
							<input id="email-address" name="email" type="email" autoComplete="email" required
										 className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
										 placeholder="Enter your email"/>
							<button type="submit"
											className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
								Subscribe
							</button>
						</div>
					</div>
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-4xl font-semibold tracking-tight text-white">Contact Us</h2>
						<p className="mt-4 text-lg text-gray-300">Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt.</p>
						<div className="mt-6 flex justify-between mx-auto max-w-md gap-x-4 text-white font-semibold">
							<div className="tooltip-container">
								<span className="text">Email</span>
								<span>info@aztronics.com</span>
							</div>
							<div className="tooltip-container">
								<span className="text">Phone</span>
								<span>+355 69 34 17 521</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Newsletter;