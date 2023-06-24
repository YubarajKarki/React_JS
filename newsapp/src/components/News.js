import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Kelsey Ables",
      "title": "Russia-Ukraine war news: Ukraine strikes ‘Gate to Crimea’ bridge - The Washington Post",
      "description": "A Ukrainian official said the attack on the bridge was a blow to Russian logistics and a sign the counteroffensive could become more dynamic in the south.",
      "url": "https://www.washingtonpost.com/world/2023/06/23/russia-ukraine-war-news/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VYKZOFTYSHK7GHDOCVMTDF6N5A_size-normalized.jpg&w=1440",
      "publishedAt": "2023-06-23T07:41:54Z",
      "content": "Ukrainian missiles hit a bridge connecting Russian-held territory in Kherson and the Crimean Peninsula, Russian officials said Thursday, blaming Ukrainian forces for the attack. RIA Novosti, a Russia… [+4686 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "By <a href=\"/profiles/kathleen-magramo\">Kathleen Magramo</a>, CNN",
      "title": "Russia's war in Ukraine: Live updates - CNN",
      "description": "A key bridge connecting Ukraine's southern Kherson region to the Crimean peninsula was damaged by Ukrainian shelling, a Russian-backed official said Thursday. Follow here for live updates.",
      "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-06-23-23/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230622153927-05-ukraine-counteroffensive-neskuchne-storozheve-intl-super-tease.jpeg",
      "publishedAt": "2023-06-23T07:20:00Z",
      "content": "Russia is 99.9% likely to quit the Black Sea grain deal when it expires in mid-July, a Ukrainian diplomat has said.\r\nOlha Trofimtseva, an ambassador at large for Ukraines foreign ministry, gave two r… [+2125 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Live Science"
      },
      "author": "Harry Baker",
      "title": "Earth's thermosphere reaches highest temperature in 20 years after being bombarded by solar storms - Livescience.com",
      "description": "The atmospheric temperature spike, which was caused by successive geomagnetic storms, suggests the \"solar maximum\" is fast approaching.",
      "url": "https://www.livescience.com/space/the-sun/earths-thermosphere-reaches-highest-temperature-in-20-years-after-being-bombarded-by-solar-storms",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/pNfYb7H2j9XeKrkomiBnSk-1200-80.jpg",
      "publishedAt": "2023-06-23T07:00:00Z",
      "content": "A vibrant aurora display during a geomagnetic storm.  (Image credit: Shutterstock)\r\nEarth's thermosphere recently hit a near 20-year temperature peak\r\n after soaking up energy from geomagnetic storms… [+4443 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "2023 NBA Draft grades: Pick-by-pick analysis of all 58 selections with intrigue starting right after No. 1 - CBS Sports",
      "description": "Here's the pick-by-pick breakdown, complete with a grade for each pick of the 2023 NBA Draft",
      "url": "https://www.cbssports.com/nba/news/2023-nba-draft-grades-pick-by-pick-analysis-of-all-58-selections-with-intrigue-starting-right-after-no-1/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/23/15da8afe-778e-4d9a-9dd8-ed1b627a0e2d/thumbnail/1200x675/8d24a7cf575515324fd96f5f7ef5ae62/gettyimages-1258956342-1.jpg",
      "publishedAt": "2023-06-23T06:16:00Z",
      "content": "There was no suspense this year as to who would go No. 1 overall in the NBA Draft Victor Wembanyama was the expected favorite and Victor Wembanyama was indeed the pick for the Spurs but intrigue and … [+26836 chars]"
    } 
]
constructor() {
  super();
  console.log("Hello I am a constructor from News Componet");
  this.state = {
    articles: this.articles,
    loading: false
  }
}

render() {
  return (

    <div className="container my-3">
      <h2>NewsAPP - Top Headlines</h2>
      <div className="row">
      {this.state.articles.map((element)=>{
        return <div className="col-md-4" key= {element.url}>
          <NewsItem  title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imgURL={element.urlToImage}  newsURL= {element.url} />
        </div>
        })}

      </div>
    </div>

  )
}
}

export default News