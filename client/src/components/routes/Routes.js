import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layout/NotFound';
import Shop from '../subpages/Shop';
import ProductDetails from '../subpages/ProductDetails';
import Cart from '../subpages/Cart';
import SignIn from '../subpages/SignIn';
import Register from '../subpages/Register';
import AddProduct from '../subpages/AddProduct';
import Shipping from '../subpages/Shipping';
import Payment from '../subpages/Payment';
import PlaceOrder from '../subpages/PlaceOrder';
import Order from '../subpages/Order';
import UserProfile from '../subpages/UserProfile';
import ManageOrders from '../subpages/ManageOrders';

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
				<Route path="/placeorder" component={PlaceOrder} />
				<Route path="/shipping" component={Shipping} />
				<Route path="/payment" component={Payment} />
				<Route path="/order/:id" component={Order} />
				<Route path="/profile" component={UserProfile} />
				<Route path="/manageorders" component={ManageOrders} />
				<Route path="/category/:id" component={Shop} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
