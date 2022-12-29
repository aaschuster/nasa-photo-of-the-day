// will need photo and possibly caption? and date?

import React from "react";
import styled from 'styled-components';

const StyledImg = styled.img`
    border-radius: 10px;
    max-width: 95%;
    max-height: 80vh;
`;  

const Content = ( {url, copyright, StyledSmallText} ) => {
    
    return (
        <div id="content">
            <StyledImg src={url}/>
            <StyledSmallText>Copyright: {copyright}</StyledSmallText>
        </div>
    )
}

export default Content;