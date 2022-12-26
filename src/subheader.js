import React from "react";

const SubHeader = ( {title, date} ) => {
    return (
        <div id="subheader">
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    )
}

export default SubHeader;