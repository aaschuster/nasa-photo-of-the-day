import React from "react";
import styled from 'styled-components';

const StyledSubHeader = styled.div`
    font-family: Optima, sans-serif;
    color: dimgray;   
`;  

const SubHeader = ( {title, date, StyledSmallText} ) => {
    return (
        <StyledSubHeader>
            <h2>{title}</h2>
            <StyledSmallText>{date}</StyledSmallText>
        </StyledSubHeader>
    )
}

export default SubHeader;