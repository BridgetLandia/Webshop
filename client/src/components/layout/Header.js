import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';
import xbox from '../../assets/xbox.svg';

const Header = (props) => {
	const [ dropdownOpen, setDropdownOpen ] = useState(false);
	const toggledown = () => setDropdownOpen(!dropdownOpen);
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
					<img id="logo" src={xbox} alt="logo" />
				</Link>
				<NavbarBrand href="/">
					<span id="business_name">Game shop</span>
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
							<Link className="nav_link" to="/cart">
								Cart
							</Link>
						</NavItem>
						{userInfo &&
						userInfo._isAdmin && (
							<Dropdown nav isOpen={dropdownOpen} toggle={toggledown}>
								<DropdownToggle nav caret>
									Admin
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<Link to="/manageorders">Orders</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/products">Products</Link>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						)}

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
							{userInfo && (
								<Link to="/" onClick={handleLogout}>
									Log out
								</Link>
							)}
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
