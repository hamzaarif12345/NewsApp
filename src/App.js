import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
export default class App extends Component{
  c='hamza';
  render(){
    return (
      <div>
          <Navbar/>
          <News country='in' pageSize={8} category='health'/>
      </div>
    )
  }
}

