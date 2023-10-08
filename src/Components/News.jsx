import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'; // Correct the import statement

export default class App extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = { // Correct the PropTypes definition
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    console.log("hello, I am a constructor");
    this.state = {
      articles: [],
      loading: true, // Set loading to true initially
      page: 1,
      totalResults: 0 // Initialize totalResults
    };
  }

  async componentDidMount() {
    await this.fetchData(1); // Fetch data for the initial page
  }

  fetchData = async (page) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e1916724126e4cb0a153e4793ffaf400&page=${page}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.articles) {
        this.setState({
          articles: data.articles,
          loading: false,
          page,
          totalResults: data.totalResults // Update totalResults from API response
        });
      } else {
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      await this.fetchData(this.state.page - 1); // Fetch data for the previous page
    }
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      await this.fetchData(this.state.page + 1); // Fetch data for the next page
    }
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container my-3">
        <h1 className="text-center my-4" style={{margin:'40px 0px'}}>Top Headlines</h1>

        {loading ? (
          <p>Spinner...</p>
        ) : (
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 60) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        )}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
