import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
constructor() {
  super();
  this.state = {
    articles: [],
    loading: false,
    page: 1
  }
  }
  
  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c919eee1a20c43d9a93aa8338ee00c90&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlepreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c919eee1a20c43d9a93aa8338ee00c90&page=${ this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
    }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      
    }
    else {
      let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c919eee1a20c43d9a93aa8338ee00c90&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }




render() {
  return (
    <div className="container my-3">
      <h1>NewsAPP - Top Headlines</h1>
      <div className="row">
      {this.state.articles.map((element)=>{
        return <div className="col-md-4" key= {element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgURL={element.urlToImage}  newsURL= {element.url} />
        </div>
        })}
      </div>
      <div className="d-flex justify-content-between">
      <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick= {this.handlePreviousClick}>&larr; Previous</button>
      <button type="button" className="btn btn-dark" onClick= {this.handleNextClick} >Next &rarr;</button>
      </div>

    </div>

  )
}
}

export default News