import React, { Component } from 'react';
import Spinner from './Spinner-5.gif'; // Correct the import statement

export default class App extends Component {
  c = 'hamza';
  render() {
    return (
      <div className="text-center">
        <img src={Spinner} alt="loading" />
      </div>
    );
  }
}
