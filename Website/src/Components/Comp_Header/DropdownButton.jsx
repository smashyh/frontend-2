import styled from "styled-components";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";

const Wrapper = styled.div`margin: auto;`;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 128px;
    height: 84px;
    cursor: pointer;
    background-color: ${ props => props.$toggle ? "var(--bannerPressedColor)" : "var(--bannerColor)" };
    &:hover
    {
        background-color: ${ props => props.$toggle ? "var(--bannerPressedHoverColor)" : "var(--bannerHoverColor)" };
    }
    color: white;
`;


export default function DropdownButton(props)
{
    //const [dropdownLabels, setDropdownLabels] = useState([]);
    const [toggle, setToggle] = useState(false);

    var dropdownLabels = [];
    
    for (let i = 0; i < props.$categories.length; i++)
    {
        dropdownLabels.push
        ({
            id: i,
            category: props.$categories[i].label,
            path: props.$categories[i].path
        })
        // tempArr.push
        // ({
        //     id: i,
        //     category: props.$categories[i].name,
        // })
    }

    const listItems = dropdownLabels.map(label => 
        <Link key={ label.id } to={ label.path } reloadDocument>
            <DropdownItem key={ label.id } $categoryName={ label.category } />
        </Link>);

    return(
        <Wrapper>
            <Background onClick={() => setToggle(!toggle)} $toggle={ toggle }>
                { props.text }
            </Background>
            { toggle && listItems }
        </Wrapper>
    );
}