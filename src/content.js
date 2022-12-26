// will need photo and possibly caption? and date?

import React from "react";

const Content = ( {url, copyright} ) => {
    
    return (
        <div id="content">
            <img src={url} style={{ height: "80vh" }}/>
            <p>Copyright: {copyright}</p>
        </div>
    )
}

export default Content;