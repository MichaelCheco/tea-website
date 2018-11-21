import React from 'react';
import { Context } from "../contexts/TeaContext"
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    margin: 0 auto;
`
const Img = styled.img`
width: 93%;
`
const ItemWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    padding: 5px;
    width: 330px;
    border: 1px solid crimson; */
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 10px;
   
`
const Span = styled.span`
    color: white;
    padding: 5px;
    background-color: ${props => props.theme.darkblue};
    cursor: pointer;
    margin-left: 5px;
    border-radius: 2px;
`;
const ItemName = styled.h4`
    text-align: center;
`;
const Price = styled.p`
    
`;
const Description = styled.p`
    
`;
const Content = styled.div`
   
    width: 93%;
`;
const Teaware = () => (
    <Context.Consumer>
        {data => {
            return (
                <Div>
                    {data.state.teaware.map(item => (
                        <ItemWrapper>
                        <ItemName>{item.name}</ItemName>
                        <Img src={item.message} alt="teaware product" />
                        <Content>
                        <Price><strong>{item.price} <Span>Buy Now</Span></strong></Price>
                        <Description>{item.description}</Description>
                        </Content>
                        </ItemWrapper>
                    ))}
                </Div>
            )
        }}
    </Context.Consumer>
)
 
export default Teaware;