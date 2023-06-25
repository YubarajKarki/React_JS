import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
constructor() {
  super();
  this.state = {
    articles: [],
    loading: false
  }
  }
  
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c919eee1a20c43d9a93aa8338ee00c90";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})

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
    </div>

  )
}
}

export default News