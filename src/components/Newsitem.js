import React from 'react'

const NewsItem = (props)=> {
    
        let {title, description, imageUrl,newsUrl,author,date,source} = props;
        return (
            <div className="my-3">
                <div className="card" >
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                <span className="position-absolute top-0  transition-middle badge rounded-pill bg-danger ">{source}</span>
                </div>
                    <img src={!imageUrl?"https://www.bing.com/th?id=OIP.Y15akrnXqJ_b_aOeP_sTCQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target={"_blank"} rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem