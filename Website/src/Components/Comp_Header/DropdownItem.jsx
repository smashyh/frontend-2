import styled from "styled-components";
import React, { useState } from 'react';

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 128px;
    height: 64px;
    position: relative;
    cursor: pointer;
    border: 1px solid #CDC2B1;
    color: black;
    font-weight: bold;
    background-color: ${ props => props.$toggle ? "var(--bannerPressedColor)" : "var(--bannerColor)" };
    &:hover
    {
        background-color: ${ props => props.$toggle ? "var(--bannerPressedHoverColor)" : "var(--bannerHoverColor)" };
    }
`;

export default function DropdownItem(props)
{
    const [toggle, setToggle] = useState(false);

    return(
        <Background>
            { props.$categoryName }
        </Background>
    );
}// onClick={() => setToggle(!toggle)} $toggle={ toggle }