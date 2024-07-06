import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
  };
  return (
    <div className="my-2 shadow p-2 mb-3 bg-white rounded">
      <div className="card h-100 d-flex flex-fill">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            top: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <div className="inner ">
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className="card-img-top custom-image"
            alt="..."
            style={{ aspectRatio: "16/9" }} // Fixed aspect ratio for image
          />
        </div>

        <div className="card-body d-flex flex-column align-items: stretch">
          <h5 className="card-title">{truncateText(title, 110)}</h5>  {/* Truncate title */}
          <p className="card-text">{truncateText(description, 100)}</p>  {/* Truncate description */}
          <div className="mt-auto text-center">
            <p className="card-text text-muted mb-0">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark mt-3"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
