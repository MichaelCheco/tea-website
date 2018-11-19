import React from "react";
import PropTypes from 'prop-types';
import { Route, NavLink } from "react-router-dom";
import { Context } from "../contexts/TeaContext"

const Tea = props => (
    <Context.Consumer>
      {data => {
        if (data.state.teas < 1) {
    return <h1>WAIT!!!!</h1>;
  }
          const TeaPage = data.state.teas.find(tea => `${tea.id}` === props.match.params.id);
          return (
          <h3>{TeaPage.description}</h3>
      )
      }}
      
    </Context.Consumer>
)

export default Tea;