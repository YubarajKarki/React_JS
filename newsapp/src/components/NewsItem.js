import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src= { !imgURL?"https://www.investors.com/wp-content/uploads/2022/09/Stock-applestoreentrance-01-adobe.jpg":imgURL } className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem