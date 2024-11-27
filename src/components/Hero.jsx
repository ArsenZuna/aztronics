import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";
import Spline from "@splinetool/react-spline";


const Hero = () => {
	return (
		<div className="flex-row justify-between lg:h[500px] items-center align-middle w-full bg-background overflow-hidden">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-10">
				<motion.div
					variants={fadeIn("up")}
					initial="hidden"
					whileInView={"show"}
					viewport={{once: false, amount: 0.2}}
					className="flex flex-col justify-center align-middle items-center">
					<h1 className="text-gray-200 text-6xl font-bold">Welcome!</h1>
					<p className="text-gray-200 text-xl font-semibold pt-3">Check out our products and order if you find what you are looking for.</p>
				</motion.div>
				<div className="hidden lg:block">
					<Spline scene="https://prod.spline.design/dL5Opdq6Z2lLpnUI/scene.splinecode"/>
				</div>
			</div>
		</div>
	)
};

export default Hero;