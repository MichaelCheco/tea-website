import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import '../index.css';
const NavWrapper = styled.div`background-color: ${(props) => props.theme.offWhite};`;
const NavLinks = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	background-color: ${(props) => props.theme.darkblue};
	height: 50px;
`;
const Title = styled.h1`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -10px;
`;
const ATags = styled.a`
	color: ${(props) => props.theme.offWhite};
	font-size: 17px;
	width: 120px;
	padding: 15px;
	/* border: 2px solid red; */
	&:hover {
		border: 1px solid ${(props) => props.theme.offWhite};
		color: ${(props) => props.theme.darkblue};
		background-color: ${(props) => props.theme.lightgrey};
		text-decoration: underline;
	}
`;
const Nav = () => (
	<NavWrapper>
		<Link to="/">
			<Title>
				<i className="fas fa-certificate" />
			</Title>
		</Link>
		<NavLinks>
			<Link to="/teas">
				<ATags>Tea</ATags>{' '}
			</Link>
			<Link to="/teaware">
				<ATags>Teaware</ATags>
			</Link>
			<Link to="/contact">
				<ATags>Contact Us</ATags>
			</Link>
			<Link to="/faq">
				<ATags>FAQ</ATags>
			</Link>
			<Link to="/add">
				<ATags>Add a Tea</ATags>
			</Link>
		</NavLinks>
	</NavWrapper>
);
// <i className="fas fa-coffee fa-spin"></i>
export default Nav;
