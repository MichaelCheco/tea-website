import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Context } from "../contexts/TeaContext"

const Div = styled.div`
 display: flex;
 flex-direction: column;
`
const Description = styled.p`
 width: 45%;
`
const Img = styled.img`
 width: 55%;
 border-radius: 7px;
`
const TeaName = styled.h1`
font-family: 'Merriweather', serif;
margin-left: 10px;

`
const Test = styled.div`
width: 100%;
display: flex;
align-items: center;
color: ${props => props.theme.offWhite};
background-color: ${props => props.theme.gold};
height: 80px;
margin-top: -8px;
`
const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 97%;
  justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
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
                  <Test>
                  <TeaName>{TeaPage.name}</TeaName>
                  </Test>
                  <Content>
                  <Img src={TeaPage.message} alt="green tea" />
          <Description>{TeaPage.description}</Description>
          </Content>
          </Div>
      )
      }}
      
    </Context.Consumer>
)



export default Tea;