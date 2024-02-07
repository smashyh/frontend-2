import styled from "styled-components";
import DropdownButton from "./DropdownButton.jsx"
import HeaderButton from "./HeaderButton.jsx";
import { Link } from "react-router-dom";
import ShoppingCartButton from "./ShoppingCartButton.jsx";
import axios from "axios";

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
    background-color: #e0e0e0;
    color: white;
`;

const StyledLink = styled(Link)`

    text-decoration: none;
    color: inherit;
`;

const strapiURL = 'http://localhost:1337';

function CategoryDropdownButton(props)
{
    var categories = [];

    async function fetchData()
    {
        const config = 
        {
            headers: { Authorization: 'Bearer b78558952db60ea2807bcd0662a595d994337755322db3215755b75b30bf7c89d54042e445176bc2a8e2a95239a2c8a13391e604b5c6c6bbb6669a340f6c362d0e3ac7eefdd37ffb45175218cc0faa64238156ae499218b236cca632fa0e1e261535f6064e1d230ae1db0b6b2518ba7e71775c3e4623531864f9539d2092dde8' },
        };

        const data = await axios.get(strapiURL + `/api/categories`, config);
        
        
        data.data.data.forEach(item => 
        {
            categories.push(
                {
                    label: item.attributes.category_name,
                    path: '/products/' + item.attributes.category_id
                });
        });
    }
    
    fetchData();

    return(
        <DropdownButton text={ props.text } $categories={ categories }/>
    );
}

function Header()
{
    // todo: return logo, menu, and account/shopping cart logo

    return(
        <Wrapper>
            <Background>
                <div style={{marginLeft: '64px'}}/>

                <StyledLink to='/'>
                    <HeaderButton text='Hem'/>
                </StyledLink>
                
                <CategoryDropdownButton text="Produkter"/>
                <StyledLink to='/customer-service'><HeaderButton text="Kundservice"/></StyledLink>
                
                <div style={{ display: "flex", flexDirection: "row", width: '100%', }}/>
                
                <StyledLink to='/info'><HeaderButton text="Om oss"/></StyledLink>
                <StyledLink to='/contact'><HeaderButton text="Kontakta oss"/></StyledLink>
                <StyledLink to='/shopping_cart'><ShoppingCartButton/></StyledLink>
                
                <div style={{marginRight: '64px'}}/>

            </Background>
            
        </Wrapper>
    );
}

export default Header