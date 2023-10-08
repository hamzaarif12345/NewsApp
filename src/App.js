import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
//import About from './Components/About'; // Import the About component

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Routes} from 'react-router-dom';
export default class App extends Component {
  c = 'hamza';
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
            <Routes>
            
            <Route path="/" element={<News country='in' pageSize={8} category='general' />} />
            <Route path="/business" element={<News country='in' pageSize={8} category='business' />} />
            <Route path="/entertainment" element={<News country='in' pageSize={8} category='entertainment' />} />
            <Route path="/general" element={<News country='in' pageSize={8} category='general' />} />
            <Route path="/health" element={<News country='in' pageSize={8} category='health' />} />
            <Route path="/science" element={<News country='in' pageSize={8} category='science' />} />
            <Route path="/sports" element={<News country='in' pageSize={8} category='sports' />} />
            <Route path="/technology" element={<News country='in' pageSize={8} category='technology' />} />
            </Routes>
         
        </Router>
        <Footer/>
      </div>
    )
  }
}
