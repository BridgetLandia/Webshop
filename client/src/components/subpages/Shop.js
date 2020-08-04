import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';

export default function NewShop() {
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());
	}, []);
	return loading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<div className="products">
			{products.map((product) => (
				<li key={product._id}>
					<div className="product">
						<a href={'/product/' + product._id}>
							<img className="product-image" src={product.image} alt="product" />
						</a>
						<div className="product-name">
							<a href={'/product/' + product._id}>{product.name}</a>
						</div>
						<div className="product-brand">{product.brand}</div>
						<div className="product-price">${product.price}</div>
						<div className="product-rating">
							{product.rating} Stars ({product.numReiews} Reviews)
						</div>
					</div>
				</li>
			))}
		</div>
	);
}
