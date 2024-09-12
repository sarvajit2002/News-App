import React, { useEffect, useState } from 'react';
import NewsItem from './Newsitem'; // Import NewsItem component for individual news display
import Spinner from './Spinner';   // Import Spinner component for loading state
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import InfiniteScroll from "react-infinite-scroll-component"; // Import InfiniteScroll for infinite scrolling

// Main News component
const News = (props) => {
    // State hooks for managing articles, loading status, page number, and total results
    const [articles, setArticles] = useState([]); // Holds fetched articles
    const [loading, setLoading] = useState(true); // Loading indicator
    const [page, setPage] = useState(1); // Current page for API pagination
    const [totalResults, setTotalResults] = useState(0); // Total number of results from API

    // Function to capitalize the first letter of a string (used for category headings)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    // Function to update the news based on the selected category
    const updateNews = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=10&apikey=${props.apiKey}`;
        setLoading(true); // Set loading to true while fetching data
        let data = await fetch(url); // Fetch news data from the API
        let parsedData = await data.json(); // Parse the fetched data as JSON

        // Update state with new data
        setArticles(parsedData.articles); // Store articles in state
        setTotalResults(parsedData.totalResults); // Update total results count
        setLoading(false); // Stop loading once data is fetched
    }

    // useEffect hook to fetch news when component mounts and when category changes
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`; // Set the document title dynamically based on category
        updateNews(); // Call updateNews to fetch data
        // eslint-disable-next-line
    }, [])

    // Function to fetch more news when the user scrolls down (infinite scrolling)
    const fetchMoreData = async () => {   
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=us&max=10&apikey=${props.apiKey}&page=${page + 1}`; // Append page number to the API URL
        setPage(page + 1); // Increment page number

        let data = await fetch(url); // Fetch more articles from the API
        let parsedData = await data.json(); // Parse the data

        // Filter out duplicate articles based on unique URLs to avoid repetition
        const uniqueArticles = parsedData.articles.filter(
            (newArticle) => !articles.some((article) => article.url === newArticle.url)
        );

        // Append unique articles to the current list of articles
        setArticles(articles.concat(uniqueArticles));
        setTotalResults(parsedData.totalResults); // Update total results count
    };

    return (
        <>
            {/* Heading for the page, dynamically changes based on the selected category */}
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>

            {/* Display spinner while the data is loading */}
            {loading && <Spinner />}

            {/* Infinite scrolling functionality */}
            <InfiniteScroll
                dataLength={articles.length} // Current number of articles
                next={fetchMoreData} // Fetch more data when scrolled to the bottom
                hasMore={articles.length !== totalResults} // Stop scrolling when all results are loaded
                loader={<Spinner />} // Show spinner when loading more data
            > 
                <div className="container">
                    <div className="row">
                        {/* Map through articles and display each one using the NewsItem component */}
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem 
                                        title={element.title ? element.title : ""} // Pass title to NewsItem
                                        description={element.description ? element.description : ""} // Pass description to NewsItem
                                        imageUrl={element.image} // Pass image URL
                                        newsUrl={element.url} // Pass news URL for the link
                                        author={element.source.name} // Pass author/source name
                                        date={element.publishedAt} // Pass published date
                                        source={element.source.name} // Pass the source of the article
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

// Default props in case none are passed
News.defaultProps = {
    country: 'in', // Default country is India
    category: 'general', // Default category is general
}

// Type-checking with PropTypes to ensure correct prop types
News.propTypes = {
    country: PropTypes.string, // `country` should be a string
    category: PropTypes.string, // `category` should be a string
}

export default News; // Export the News component
