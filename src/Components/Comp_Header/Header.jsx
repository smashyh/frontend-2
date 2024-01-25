import styled from "styled-components";
import DropdownButton from "./DropdownButton.jsx"

const Background = styled.div`
    //font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-family: system-ui, Helvetica;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 84px;
    background-color: #2a8545;
    color: white;
`;

function Header()
{
    // todo: return logo, menu, and account/shopping cart logo
    return(
        <Background>
            <DropdownButton text="OVER RICE"/>
        </Background>
    );
}

export default Header