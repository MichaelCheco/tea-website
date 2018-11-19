import React from "react";
import { Context } from "../contexts/TeaContext";
import styled from "styled-components";
const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Button = styled.button`
  border-radius: 10px;
  width: 30%;
  height: 43px;
  color: white;
  margin-left: 20px;
  background-color: ${props => props.theme.darkblue};
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: white;
    background-color: ${props => props.theme.gold};
    opacity: 0.7;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
const Header = styled.h1`
  margin-left: 10px;
`;
const AddTea = () => (
  <Context.Consumer>
    {data => {
      return (
        <Form onSubmit={data.actions.addTea}>
          <Header>
            Add your favorite tea! <i class="fas fa-coffee fa-spin" />
          </Header>
          <Inputs>
            <Input
              type="text"
              name="name"
              placeholder="name"
              value={data.state.name}
              onChange={data.actions.handleChange}
            />
            <Input
              type="text"
              name="description"
              placeholder="description"
              value={data.state.description}
              onChange={data.actions.handleChange}
            />
            <Input
              type="text"
              name="message"
              placeholder="paste image address here"
              value={data.state.message}
              onChange={data.actions.handleChange}
            />
          </Inputs>
          <Button type="submit" onClick={data.actions.addTea}>
            {data.state.toggle ? "Success!" : "Add"}
          </Button>
        </Form>
      );
    }}
  </Context.Consumer>
);

export default AddTea;
