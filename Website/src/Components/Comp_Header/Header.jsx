import styled from "styled-components";
import DropdownButton from "./DropdownButton.jsx"
import HeaderButton from "./HeaderButton.jsx";
import { Link } from "react-router-dom";
import ShoppingCartButton from "./ShoppingCartButton.jsx";

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
    var cat = ['Skor', 'Hoodies', 'Byxor'];

    return(
        <Wrapper>
            <Background>
                <div style={{marginLeft: '64px'}}/>

                <Link to='/'>
                    <HeaderButton text='Hem'/>
                </Link>
                
                <DropdownButton text="Produkter" $categories={ cat }/>
                <HeaderButton text="Placeholder"/>
                
                <div style={{ display: "flex", flexDirection: "row", width: '100%', }}/>
                
                <Link to='/info'><HeaderButton text="Om oss"/></Link>
                <Link to='/contact'><HeaderButton text="Kontakta oss"/></Link>
                <ShoppingCartButton/>
                
                <div style={{marginRight: '64px'}}/>

            </Background>
            
        </Wrapper>
    );
}

export default Header