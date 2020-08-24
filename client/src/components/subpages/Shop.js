import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, Form, Input, Spinner } from 'reactstrap';

export default function NewShop(props) {
	const [ searchKeyword, setSearchKeyword ] = useState('');
	const [ sortOrder, setSortOrder ] = useState('');
	const category = props.match.params.id ? props.match.params.id : '';
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(listProducts(category, searchKeyword, sortOrder));
	};

	const sortHandler = (e) => {
		setSortOrder(e.target.value);
		dispatch(listProducts(category, searchKeyword, sortOrder));
	};

	useEffect(
		() => {
			dispatch(listProducts(category));
		},
		[ category ]
	);

	return loading ? (
		<div className="loading">
			<Spinner size="m" color="secondary" />
		</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<Container fluid={true}>
			<Row>
				<Col className="sidebar" md={2}>
					<Nav className="sidebar_nav" vertical>
						<NavItem className="sidebar_nav_titel">
							<h4>Categories</h4>
						</NavItem>
						<NavItem>
							<Link to="/shop">All</Link>
						</NavItem>
						<NavItem>
							<Link to="/category/Xbox">Xbox</Link>
						</NavItem>
						<NavItem>
							<Link to="/category/PS4">PS4</Link>
						</NavItem>
						<Form>
							<Input className="filter" type="select" value={sortOrder} onChange={sortHandler}>
								<option>New</option>
								<option value="lowest">Lowest Price</option>
								<option value="highest">Highest Price</option>
							</Input>
						</Form>
					</Nav>
				</Col>
				<Col md={10}>
					<div id="filter_container">
						<form onSubmit={submitHandler}>
							<input
								className="searchKeyword"
								name="searchKeyword"
								onChange={(e) => setSearchKeyword(e.target.value)}
							/>
							<button className="button primary" type="submit">
								Search
							</button>
						</form>
					</div>
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
									<div className="product-price">${product.price}</div>
									<div className="product-rating">
										{product.rating} Stars ({product.numReiews} Reviews)
									</div>
								</div>
							</li>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
}
