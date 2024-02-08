import styled from "styled-components";
import DropdownButton from "./DropdownButton.jsx"
import HeaderButton from "./HeaderButton.jsx";
import { Link } from "react-router-dom";
import ShoppingCartButton from "./ShoppingCartButton.jsx";
import axios from "axios";
import process from "process";

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
    background-color: #E4D8C5;
    color: white;
`;

const StyledLink = styled(Link)`

    text-decoration: none;
    color: inherit;
`;

function CategoryDropdownButton(props)
{
    var categories = [];

    async function fetchData()
    {
        const config = 
        {
            headers: { Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY },
        };

        const data = await axios.get(import.meta.env.VITE_STRAPI_URL + `/api/categories`, config);
        
        
        data.data.data.forEach(item => 
        {
            categories.push(
                {
                    label: item.attributes.categroy_name, // <-- accidentally misspelled "category" in strapi so i have no intention of changing this shit for now
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