import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import API from "../utils/api.jsx";
import ProductCard from "./ProductCard";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";

const Deals = () => {
	const [productDeals, setProductDeals] = useState({ high: null, mid: null, low: null });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDeals = async () => {
			try {
				const response = await API.get("/products.json");
				const dealsArray = Object.values(response.data).map((product) => {
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

				const highDiscountProduct = dealsArray
					.filter((product) => product.price > 1000 && product.discount)
					.sort((a, b) => b.rating - a.rating)[0];

				const midDiscountProduct = dealsArray
					.filter((product) => product.price > 700 && product.price <= 1000 && product.discount)
					.sort((a, b) => b.rating - a.rating)[0];

				const lowDiscountProduct = dealsArray
					.filter((product) => product.price <= 700 && product.discount)
					.sort((a, b) => b.rating - a.rating)[0];

				// Set the deals state
				setProductDeals({
					high: highDiscountProduct || null,
					mid: midDiscountProduct || null,
					low: lowDiscountProduct || null,
				});
			} catch (error) {
				console.error("Error fetching deals:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchDeals();
	}, []);


	return (
		<motion.div
			variants={fadeIn("right")}
			initial="hidden"
			whileInView={"show"}
			viewport={{once: false, amount: 0.2}}
			className="container mx-auto pt-16 mb-16">
			<h1 className="flex flex-1 justify-center md:justify-start text-2xl font-bold text-gray-900">
				Check Our Deals
			</h1>
			{loading ? (
				<div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mx-auto"></div>
			) : (
				<Swiper
					modules={[Navigation]}
					spaceBetween={100}
					slidesPerView={1}
					navigation
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						720: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					className="p-6"
				>
					{productDeals.high && (
						<SwiperSlide>
							<ProductCard
								product={productDeals.high}
								discountedPrice={productDeals.high.discountedPrice}
							/>
						</SwiperSlide>
					)}
					{productDeals.mid && (
						<SwiperSlide>
							<ProductCard
								product={productDeals.mid}
								discountedPrice={productDeals.mid.discountedPrice}
							/>
						</SwiperSlide>
					)}
					{productDeals.low && (
						<SwiperSlide>
							<ProductCard
								product={productDeals.low}
								discountedPrice={productDeals.low.discountedPrice}
							/>
						</SwiperSlide>
					)}
				</Swiper>
			)}
		</motion.div>
	);
};

export default Deals;
