import React, { Component } from 'react';

export default class App extends Component {
  //c='hamza';

  convertToIST(dateString) {
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return new Date(dateString).toLocaleString('en-US', options);
  }

  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    const istDate = this.convertToIST(date);

    return (
      <div>
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              {source && source.name && ( // Check if source and source.name exist
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {source.name}
                </span>
              )}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Anonymous" : author} on {istDate}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}
