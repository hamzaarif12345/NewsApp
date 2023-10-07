// import './App.css'

import React, { Component } from 'react';
export default class App extends Component{
  //c='hamza';
  
  render(){
    let {title,description,imageurl,newsUrl }=this.props;
    return (
      <div>
        <div className="card" >
          <img src={imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>
    )
  }
}
//export default Newsitem