import React, {useState} from "react";
import {Rating} from "@mui/material";
import {useCart} from "../utils/CartContext.jsx";
import {useNavigate} from "react-router-dom";

const ProductCard = ({product, discountedPrice}) => {
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const navigate = useNavigate();
	const {addToCart} = useCart();

	const handleProductClick = () => {
		navigate(`/products/${product.id}`, {state: {product}});
	};

	const handleAddToCart = () => {
		addToCart(product);
		setShowSuccessAlert(true);
		setTimeout(() => {
			setShowSuccessAlert(false);
		}, 1000);
	};

	return (
		<>
			<div className="mx-auto max-w-2xl px-4 lg:px-8">
				<div className="grid grid-cols-1 bg-white px-8 pb-8 rounded-lg">
					<div className="group relative cursor-pointer" onClick={handleProductClick}>
						<img
							src={product.image}
							alt={product.name}
							className="aspect-square object-contain rounded-md group-hover:opacity-60 lg:aspect-auto lg:h-80"
						/>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-md font-bold text-gray-700">
									<a href="#">
										{product.name}
									</a>
								</h3>
								<div className="pt-2">
									<Rating name="read-only" value={product.rating} readOnly size="small"/>
								</div>
							</div>
							<span className="text-md font-bold">
              {discountedPrice && (
								<p className="text-sm text-gray-500 text-red-600 line-through">${product.price.toFixed(2)}</p>
							)}
								${discountedPrice ? discountedPrice.toFixed(2) : product.price.toFixed(2)}
            </span>
						</div>
					</div>
					<button
						className="mt-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 transition-colors"
						onClick={handleAddToCart}
					>
						Add to cart
					</button>
				</div>
			</div>
			{showSuccessAlert && (
				<div
					className="fixed top-0 left-0 right-0 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
					role="alert"
					style={{zIndex: 9999}}
				>
					<svg
						className="flex-shrink-0 inline w-4 h-4 me-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
					</svg>
					<span className="sr-only">Info</span>
					<div>
						<span className="font-medium">Item added to cart!</span> Your item has been successfully added.
					</div>
				</div>
			)}
		</>
	);
};

export default ProductCard;
