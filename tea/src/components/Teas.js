import React from 'react';
import { Context } from "../contexts/TeaContext";
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

import styled, { keyframes } from "styled-components";
const TeaWrapper = styled.div`
 display: flex;
 flex-flow: row wrap;
`
const TeaDiv = styled.div`
margin: 20px;
margin-top: 14px;
`
const TeaName = styled.h2`
text-align: center;

`
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
`
const TeaImg = styled.img`
 width: 200px;
 height: 200px;
 cursor: pointer;
 border-radius: 7px;
 &:hover {
    animation: ${ImageHover} 0.7s linear infinite;
 }
`
const Teas = props => {
    return (
        <Context.Consumer>
            {data => {
                if (!data.state.teas) {
                    return <h3>Loading</h3>
                }else {
                return (
                    <TeaWrapper>
                    {data.state.teas.map(tea => (
                        <TeaDiv>
                        <TeaName>{tea.name}</TeaName>
                        <TeaImg src={tea.message} alt="tea" onClick={(e) => props.history.push(`/teas/${tea.id}`)}/>
                        </TeaDiv>
                        )
                        )}                 
                    </TeaWrapper>
                )
                }
            }}
        </Context.Consumer>
    )
}

Teas.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teas: PropTypes.array.isRequired
}

export default Teas;