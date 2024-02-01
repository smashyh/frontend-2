import styled from "styled-components";
import React, { useState, useEffect } from 'react';
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
    const [dropdownLabels, setDropdownLabels] = useState([]);
    const [toggle, setToggle] = useState(false);

    // var categoryElements = [];
    // for (var i = 0; i < props.$categories.length; i++)
    // {
    //     //<DropdownItem categoryName={ props.$categories[i].toString() }/>
    //     categoryElements.push(<DropdownItem key={props.$categories[i].toString()} categoryName={ props.$categories[i].toString() }/>);
    // }´
    
    useEffect(() =>
    {
        const tempArr = [];
        for (let i = 0; i < props.$categories.length; i++)
        {
            tempArr.push
            ({
                id: i,
                category: props.$categories[i],
            })
        }

        setDropdownLabels([...dropdownLabels, ...tempArr]);
    }, []);

    const listItems = dropdownLabels.map(label => <DropdownItem key={ label.id } $categoryName={ label.category }/>);

    return(
        <Wrapper>
            <Background onClick={() => setToggle(!toggle)} $toggle={ toggle }>
                { props.text }
            </Background>
            { toggle && listItems }
        </Wrapper>
    );
}