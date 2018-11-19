import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { Context } from "../contexts/TeaContext"

const Div = styled.div`

`
const Description = styled.p`

`
const Img = styled.img`

`
const TeaName = styled.h1`

`

const Tea = props => (
    <Context.Consumer>
      {data => {
        if (data.state.teas < 1) {
    return <h1>WAIT!!!!</h1>;
  }
          const TeaPage = data.state.teas.find(tea => `${tea.id}` === props.match.params.id);
          return (
              <Div>
                  <TeaName>{TeaPage.name}</TeaName>
                  <Img src={TeaPage.message} alt="green tea" />
          <Description>{TeaPage.description}</Description>
          </Div>
      )
      }}
      
    </Context.Consumer>
)

export default Tea;