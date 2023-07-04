import React from 'react'

const NewsItem = (props) => {
  let { title, description, imgURL, newsURL, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={!imgURL ? "https://www.investors.com/wp-content/uploads/2022/09/Stock-applestoreentrance-01-adobe.jpg" : imgURL} className="card-img-top" alt="" />
        <span className="badge text-bg-info text-dark rounded-0 p-2" >{source}</span>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>

        </div>
      </div>
    </div>
  )
}

export default NewsItem