import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import API from "../utils/api.jsx";
import ProductCard from "./ProductCard";
import {motion} from "framer-motion";
import {fadeIn} from "../assets/variants.jsx";

const PopularProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await API.get("/products.json");
				const productArray = Object.values(response.data);
				const topProducts = productArray
					.filter((product) => product.rating)
					.sort((a, b) => b.rating - a.rating)
					.slice(0, 3);
				setProducts(topProducts);
			} catch (error) {
				console.error("Error fetching products: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return (
		<motion.div
			variants={fadeIn("left")}
			initial="hidden"
			whileInView={"show"}
			viewport={{once: false, amount: 0.2}}
			className="container mx-auto pt-16">
			<h1 className="flex flex-1 justify-center md:justify-start text-2xl font-bold text-gray-900">
				Most Loved Products
			</h1>
			{loading ? (
				<div
					className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mx-auto mt-16"></div>
			) : (
				<div>
					<Swiper
						style={{display: "flex", justifyContent: "center"}}
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
						{products.map((product, index) => (
							<SwiperSlide key={index}>
								<ProductCard product={product}/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</motion.div>
	);
};

export default PopularProducts;
