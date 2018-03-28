import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from 'antd-mobile';

class App extends Component {
  componentDidMount(){
    axios.get('/api/index.php',{
      params: {
      c:'signer',
      a:'getList',
      para: {"page_id":1,"status":2}
    }
  })
    .then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button>Start</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
