import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layout/NotFound';
import Shop from '../subpages/Shop';
import ProductDetails from '../subpages/ProductDetails';
import Cart from '../subpages/Cart';
import SignIn from '../subpages/SignIn';
import Register from '../subpages/Register';
import AddProduct from '../subpages/AddProduct';

export default function Routes() {
	return (
		<div>
			<Switch>
				<Route exact path="/shop" component={Shop} />
				<Route path="/product/:id" component={ProductDetails} />
				<Route path="/cart/:id?" component={Cart} />
				<Route path="/signin" component={SignIn} />
				<Route path="/register" component={Register} />
				<Route path="/products" component={AddProduct} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
