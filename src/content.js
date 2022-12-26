// will need photo and possibly caption? and date?

import React from "react";

const Content = ( { title, date, url, mediaType, copyright} ) => {
    return (
        <div id="content">
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={url} style={{ height: "80vh" }}/>
            <p>Copyright: {copyright}</p>
        </div>
    )
}

export default Content;