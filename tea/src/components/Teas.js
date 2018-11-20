import React from 'react';
import { connectStore } from '../contexts/store';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';
const TeaWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 100vh;
`;
const TeaDiv = styled.div`
	margin: 20px;
	margin-top: 14px;
`;
const TeaName = styled.h2`text-align: center;`;
const ImageHover = keyframes`
    0% {
        opacity: 1
    }
    50% {
        opacity: 0.75
    }
    100% {
        opacity: 0.5
    }
`;
const TeaImg = styled.img`
	width: 200px;
	height: 200px;
	cursor: pointer;
	border-radius: 7px;
	&:hover {
		animation: ${ImageHover} 0.7s linear infinite;
	}
`;
class Teas extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { teas } = this.props;
		if (!teas) {
			return <h3>Loading</h3>;
		} else {
			return (
				<TeaWrapper>
					{teas.map((tea) => (
						<TeaDiv>
							<TeaName>{tea.name}</TeaName>
							<TeaImg src={tea.message} alt="tea" onClick={(e) => this.history.push(`/teas/${tea.id}`)} />
						</TeaDiv>
					))}
				</TeaWrapper>
			);
		}
	}
}

Teas.propTypes = {
	message: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	teas: PropTypes.array.isRequired
};

export default connectStore(Teas);
