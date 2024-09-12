import React from 'react';

// Functional component to display individual news items
const NewsItem = (props) => {
    
    // Destructure props to extract relevant values for each news item
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div className="my-3">
            {/* Bootstrap card to structure the news item */}
            <div className="card">

                {/* Section to display the source badge on top right corner of the card */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end', // Aligns the badge to the right
                    position: 'absolute', // Positions the badge absolutely inside the card
                    right: '0' // Ensures it stays at the right edge
                }}>
                    {/* Displays the source of the news item as a badge */}
                    <span className="position-absolute top-0 badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>

                {/* Image section: displays image if available, otherwise shows a placeholder */}
                <img src={!imageUrl 
                    ? "https://www.bing.com/th?id=OIP.Y15akrnXqJ_b_aOeP_sTCQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" 
                    : imageUrl} 
                    className="card-img-top" 
                    alt="News" // Alt text for the image
                />

                {/* Card body containing the news title, description, and additional info */}
                <div className="card-body">
                    {/* News title displayed in a larger font */}
                    <h5 className="card-title">{title}</h5>
                    
                    {/* News description or summary text */}
                    <p className="card-text">{description}</p>
                    
                    {/* Author and publication date of the news item */}
                    <p className="card-text">
                        <small className="text-muted">
                            {/* If author is not available, display 'Unknown' */}
                            By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
                        </small>
                    </p>
                    
                    {/* Read More button linking to the full news article */}
                    <a href={newsUrl} target={"_blank"} rel="noreferrer" className="btn btn-sm btn-dark">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
