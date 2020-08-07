import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';
import knitting from '../../assets/knitting.svg';

const Header = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const userSignIn = useSelector((state) => state.userSignIn);
	const { userInfo } = userSignIn;
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div>
			<Navbar id="mainNavbar" light expand="md" fixed="top">
				<Link to="/">
					<img id="logo" src={knitting} alt="logo" />
				</Link>
				<NavbarBrand href="/">
					<span id="business_name">Knit-style</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem onClick={toggle}>
							<Link className="nav_link" to="/">
								Home
							</Link>
						</NavItem>
						<NavItem onClick={toggle}>
							<Link className="nav_link" to="/shop">
								Shop
							</Link>
						</NavItem>
						<NavItem onClick={toggle}>
							{userInfo ? (
								<Link className="nav_link" to="/profile">
									{userInfo._name}
								</Link>
							) : (
								<Link className="nav_link" to="/signin">
									Sign in
								</Link>
							)}
						</NavItem>
						<NavItem>
							{userInfo &&
							userInfo._isAdmin && (
								<div className="dropdown">
									<a href="#">Admin</a>
									<ul className="dropdown-content">
										<li>
											<Link to="/manageorders">Orders</Link>
											<Link to="/products">Products</Link>
										</li>
									</ul>
								</div>
							)}
						</NavItem>
						<NavItem>{userInfo && <Link onClick={handleLogout}>Log out</Link>}</NavItem>
						<NavItem onClick={toggle}>
							<Link className="nav_link" to="/cart">
								Cart
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
