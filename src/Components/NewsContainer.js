import axios from 'axios';
import React, { Component } from 'react';
import NewsWidget from './NewsWidget';


class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_NEWS_BASE_URL}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    console.log(url)
    axios
      .get(url)
      .then(response => response.data.articles)
      .then(data => {
        this.setState({
          articles: data
        })
        console.log(data)
      })
  }

  render() {
    const categoryName = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    return (
      <NewsWidget {...this.state} category={categoryName} startTime={this.props.startTime}/>
    )
  }
}

export default NewsContainer;