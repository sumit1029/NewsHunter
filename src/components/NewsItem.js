import React from "react";


const NewsItem = (props) => {

    let {title, description, imgUrl, newsUrl, time, author, source} = props;
    let date = new Date(time);

    return (
      <div>

        <div className="card my-3">
          <div style={{display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0}}>
        <span className="badge rounded-pill bg-danger">
    {source.name}
  </span>
  </div>
          <img src={imgUrl} className="card-img-top" alt="..." height="200px" width="160px"/>
          <div className="card-body">
            
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date.toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
