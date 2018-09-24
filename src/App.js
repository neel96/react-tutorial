import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './component/header';
import {About} from './component/about';

class App extends Component {
  render() {

    var user = {
      name : "Anuj",
      hobbies : [
        "reading",
        "listening music",
        "driving",
        "playing garba"
      ]
    };
    const name = {
      firstname : 'Neel',
      lastname : 'Patel'
    };
    
  //   const disp = {
  //     type:'h1',
  //     props : {
  //       className : 'App-title',
  //       children : ''Welcome to '
  //     }
  // };  

    function FormatName(name){
      return name.firstname + ' ' + name.lastname ; 
    }  
      function tick(){
          return new Date().toLocaleTimeString();
      }
      
    
    return (
      
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to {FormatName(name)}</h1>
            <h1 className="App-title">{tick()}</h1>
       </header>
        <p className="App-intro">
        
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container"><Header name={ "neel" } age={ 27 } user={ user } >
          <p>My name is Neel Patel</p>
       </Header></div>
        {/* <div className="container"><About /></div> */}
      </div>
    );  
    //setInterval(tick,1000);
  }
}
//class App extends Component

export default App;
