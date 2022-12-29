import React from "react";
import styled from 'styled-components';

const StyledSubHeader = styled.div`
    font-family: Optima, sans-serif;
    color: dimgray;   
`;  

const StyledDate =  styled.p`
    font-style: italic;
    font-size: 0.8rem;
`

const SubHeader = ( {title, date} ) => {
    return (
        <StyledSubHeader>
            <h2>{title}</h2>
            <StyledDate>{date}</StyledDate>
        </StyledSubHeader>
    )
}

export default SubHeader;