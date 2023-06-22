import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className= "container my-3">
        {/* This is  News Component
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem /> */}

        <h2>NewsAPP - Top Headlines</h2>
        <div className="row">
          
          <div className="col-md-4" description="myDesc"></div>
          
          <div className="col-md-4" description="myDesc"></div>
          
          <div className="col-md-4" description="myDesc"></div>
          
        </div>

      </div>
    )
  }
}

export default News