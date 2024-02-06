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
    background-color: #2a8545;
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
            headers: { Authorization: 'Bearer e05a848cc3bf92eb2e1952bf054548150013161eb5b9a38caa774cecaad99511a3bf1f8c2fea3f421ed8b123559213c83cec4afbfefd2293d6d1f886ce790a2a3c5206c82f50824054330ae285a29cd720ebc09e1e04d1713bafc945a4b794e80723a4b9e0421fd9d7a131240f7058a5fdf26a3d05af8756af08d885616794f7' },
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