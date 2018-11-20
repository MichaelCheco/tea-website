import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Teas from './components/Teas';
import Nav from './components/Nav';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Teaware from './components/Teaware';
import AddTea from './components/AddTea';
import Tea from './components/Tea';
import { connectStore } from './contexts/store';

const theme = {
	black: '#393939',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	darkblue: '#0D253D',
	gold: '#988144',
	offWhite: '#EDEDED'
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
					<view>
						<Nav />
						<Route exact path="/" component={Home} />
						<Route exact path="/teas" component={Teas} />
						<Route path="/teas/:id" component={Tea} />
						<Route path="/contact" component={Contact} />
						<Route path="/faq" component={FAQ} />
						<Route path="/teaware" component={Teaware} />
						<Route path="/add" component={AddTea} />
					</view>
				</ThemeProvider>
			</div>
		);
	}
}

export default connectStore(App);
