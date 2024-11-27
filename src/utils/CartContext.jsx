import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		setCartItems((prev) => [
			...prev,
			{
				...item,
				price: item.price,
				discountedPrice: item.discountedPrice || item.price
			},
		]);
	};

	const removeFromCart = (index) => {
		setCartItems((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
