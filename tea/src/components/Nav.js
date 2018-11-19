import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
    border: 2px solid red;
`
const NavLinks = styled.nav`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
background-color: ${props => props.theme.darkblue};
height: 50px;

`
const Title = styled.h1`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const ATags = styled.a`
color: ${props => props.theme.offWhite};
font-size: 17px;
width: 120px;
padding: 15px;
/* border: 2px solid red; */
&:hover {
    border: 1px solid ${props => props.theme.offWhite};
    color: ${props => props.theme.darkblue};
    background-color: ${props => props.theme.lightgrey};
    text-decoration: underline;
}
`
const Nav = () => (
    <NavWrapper>
    <Title>CHECOsTEA</Title>
    <NavLinks>
        <Link to=''><ATags>Tea</ATags> </Link>
        <Link to=''><ATags>Teaware</ATags></Link>
        <Link to=''><ATags>Contact Us</ATags></Link>
        <Link to=''><ATags>FAQ</ATags></Link>
        <Link to=''><ATags>Tea Types</ATags></Link>
    </NavLinks>
    </NavWrapper>
)

export default Nav;