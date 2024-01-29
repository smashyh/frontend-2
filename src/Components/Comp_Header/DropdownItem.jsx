import styled from "styled-components";
import React, { useState } from 'react';

const Background = styled.div`
    //font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-family: system-ui, Helvetica;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 128px;
    height: 64px;
    background-position-y: 96px;
    background-color: ${ props => props.$toggle ? "#1b552c" : "#2a8545" };
    cursor: pointer;
    &:hover
    {
        background-color: ${ props => props.$toggle ? "#0f3119" : "#1a522a" };
    }
    color: white;
`;

function DropdownItem(props)
{
    const [toggle, setToggle] = useState(false);

    return(
        <Background>
            { props.$categoryName }
        </Background>
    );
}//// onClick={() => setToggle(!toggle)} $toggle={ toggle }

export default DropdownItem