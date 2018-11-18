import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeaProvider from './contexts/TeaContext';
import Teas from './components/Teas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeaProvider>
          <Teas />
        </TeaProvider>
      </div>
    );
  }
}

export default App;
