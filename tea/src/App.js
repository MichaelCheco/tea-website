import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";
import TeaProvider from "./contexts/TeaContext";
import Teas from "./components/Teas";
import Nav from "./components/Nav";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "./components/Home";

const theme = {
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  darkblue: '#0D253D',
  gold: '#988144',
  offWhite: '#EDEDED',
};

const GlobalStyle = createGlobalStyle`
  html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Raleway', sans-serif;    
      }
      img {
        width: 100%;
        height: auto;
      }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TeaProvider>
            <Nav />
            <Home />
            <Route path="/" Component={Home} />
            <Route path="/teas" render={props => <Teas {...props} />} />
          </TeaProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
