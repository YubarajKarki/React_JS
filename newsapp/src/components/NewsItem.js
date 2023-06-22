import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsItem extends Component {
  render() {
    return (
      <div className= "card" style={{ width: "18rem" }}>
        <div className= "card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newsdetails" className='btn btn-primary'>Go Somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem