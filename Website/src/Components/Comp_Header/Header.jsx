import styled from "styled-components";
import DropdownButton from "./DropdownButton.jsx"
import HeaderButton from "./HeaderButton.jsx";

const Wrapper = styled.div`

    //justify-content: center;

`;

const Background = styled.div`
    //font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    justify-content: space-around;
    display: flex;
    align-items: center;
    font-family: system-ui, Helvetica;
    width: 100%;
    height: 84px;
    background-color: #2a8545;
    color: white;
`;

function Header()
{
    // todo: return logo, menu, and account/shopping cart logo
    var cat = ['shit', 'piss'];

    return(
        <Wrapper>
            <Background>
                <div style={{marginLeft: '64px'}}/>
                <DropdownButton text="Produkter" $categories={ cat }/>
                <HeaderButton text="Om oss 1"/>
                
                <div style={{ display: "flex", flexDirection: "row", width: '100%', }}/>

                <HeaderButton text="Om oss 2"/>
                <HeaderButton text="Om oss 3"/>
                <div style={{marginRight: '64px'}}/>

            </Background>
            
        </Wrapper>
    );
}

export default Header