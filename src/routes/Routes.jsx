import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import Product from "../pages/Product.jsx";
import Cart from "../pages/Cart.jsx";

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <h1>404 NOT FOUND</h1>
		},
		{
			path: '/products',
			element: <ProductsPage />,
			errorElement: <h1>404 NOT FOUND</h1>
		},
		{
			path: '/products/:id',
			element: <Product />,
			errorElement: <h1>404 NOT FOUND</h1>
		},
		{
			path: '/shoppingcart',
			element: <Cart />,
			errorElement: <h1>404 NOT FOUND</h1>
		}
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
