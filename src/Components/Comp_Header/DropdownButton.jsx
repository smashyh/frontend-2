import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import DropdownItem from "./DropdownItem";

const Wrapper = styled.div`
    margin: auto;
`;

const Background = styled.div`
    //font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-family: system-ui, Helvetica;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 128px;
    height: 84px;
    background-color: ${ props => props.$toggle ? "#1b552c" : "#2a8545" };
    cursor: pointer;
    &:hover
    {
        background-color: ${ props => props.$toggle ? "#0f3119" : "#1a522a" };
    }
    color: white;
`;


function DropdownButton(props)
{
    const [dropdownLabels, setDropdownLabels] = useState([]);
    const [toggle, setToggle] = useState(false);

    // var categoryElements = [];
    // for (var i = 0; i < props.$categories.length; i++)
    // {
    //     //<DropdownItem categoryName={ props.$categories[i].toString() }/>
    //     categoryElements.push(<DropdownItem key={props.$categories[i].toString()} categoryName={ props.$categories[i].toString() }/>);
    // }

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

export default DropdownButton