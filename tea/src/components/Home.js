import React from 'react';
import { connectStore } from '../contexts/store';

import styled, { keyframes } from 'styled-components';
const HomeImg = styled.img`margin-top: -200px;`;
const appear = keyframes`

  0% {
    opacity: 0;
  }

  45% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

const Title = styled.h1`
	width: 100%;
	height: 100%;
	display: flex;
	color: ${(props) => props.theme.darkblue};
	position: relative;
	top: 100px;
	font-size: 60px;
	animation: ${appear} 10s linear;
	justify-content: center;
	align-items: center;
`;

class Home extends React.Component {
	componentDidMount() {
		this.props.getTea();
	}
	render() {
		return (
			<React.Fragment>
				<Title>CHECOsTEA</Title>
				<HomeImg
					src="https://images.pexels.com/photos/641038/pexels-photo-641038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="tea cup"
				/>
			</React.Fragment>
		);
	}
}

export default connectStore(Home);
