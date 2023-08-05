import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);
  

  const cap = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const updateNews = async () =>{
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(30);
    let parsedData = await data.json();
    props.setprogress(70);
    setarticles(parsedData.articles);
    // setpage(page-1);
    setloading(false);
    settotalResult(parsedData.totalResults);
    props.setprogress(100);
  }

  useEffect(() => {
    document.title = `${cap(props.category)} - NewsHunter`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async() => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setloading(false);
    settotalResult(parsedData.totalResults);
  };


    return (
      <>
        <h1 className="text-center" style={{marginTop: "13vh", marginBottom: "5vh"}}>NewsHunter - Top {cap(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner/>}
        >
            <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    time={element.publishedAt}
                    author={element.author}
                    source={element.source}
                  />
                </div>
              );
            })}
            </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
  
}

News.defaultProps = {
  pageSize: 5,
  country: "in",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
