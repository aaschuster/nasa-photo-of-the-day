import React from "react";
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: Optima, sans-serif;   
`;  

const Header = () => {
    return (
        <StyledH1>
            Isn't the universe an amazing place..?
        </StyledH1>
    )
}

export default Header;