import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLink = styled(Link)`

    text-decoration: none;
    color: inherit;
`;

const CheckoutButton = styled.button`
    font-family: system-ui, Helvetica;
    font-size: 1.10rem;
    border-width: 0;
    background-color: var(--bannerColor);
    color: black;
    font-weight: bold;
    transition: ease background-color 250ms;
    width: 192px;
    height: 48px;
    cursor: pointer;
    background-color: var(--bannerColor);
    &:hover
    {
        background-color: var(--bannerHoverColor);
    }
    //--bannerColor: #2a8545;
    //--bannerHoverColor: #1b552c;
`;

const localStorageCartName = 'temp_cart';

export default function ShoppingCartReview()
{
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>
    {
        // Define functions
        async function fetchData()
        {
            const cart = JSON.parse(localStorage.getItem(localStorageCartName));
            if (cart === undefined || cart.length == 0)
            {
                return;
            }

            const tempArr = [];
            let price = 0;
            
            const config = 
            {
                headers: { Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY },
            };

            for (let i = 0; i < cart.length; i++)
            {
                const data = await axios.get(import.meta.env.VITE_STRAPI_URL + `/api/products?populate=*&filters[product_id][$eq]=${cart[i]}`, config);

                // check if invalid item and skip if it is
                if (data === undefined || data === null)
                {
                    continue;
                }

                const item = data.data.data[0];

                tempArr.push
                ({
                    id: i,//item.id,
                    name: item.attributes.name,
                    image: import.meta.env.VITE_STRAPI_URL + item.attributes.photos.data[0].attributes.url, 
                    description: item.attributes.short_description,
                    price: item.attributes.price,
                    productId: item.attributes.product_id,
                });

                price += item.attributes.price;
            }

            setTotalPrice(price);
            setShoppingCart([...shoppingCart, ...tempArr]);
        }
        
        fetchData();

    }, []);

    const removeFunction = (index) => 
    {
        console.log(index);
        const cart = JSON.parse(localStorage.getItem(localStorageCartName));
        
        if (index > -1)
        {
            cart.splice(index, 1);
            localStorage.setItem('temp_cart', JSON.stringify(cart));
            window.location.reload(false);
        }
    };

    // Shopping cart is empty, can't show items or pay
    if (shoppingCart.length == 0)
    {
        return(
            <Wrapper>
                <div style={{marginLeft: '10%', marginTop: '32px'}}/>
                <div>Din kundvagn är tom.</div>
                <div style={{marginRight: '10%'}}/>
            </Wrapper>
        );
    }

    return(
        <Wrapper>
            <div style={{marginLeft: '10%'}}/>
            {
                shoppingCart.map(item => <ShoppingCartItem
                    key={ item.id }
                    $onClick={ () => removeFunction(item.id) }
                    $name={ item.name }
                    $image={ item.image }
                    // $description={ product.description }
                    $price={ item.price }
                    $productID={ item.productId }
                />)
            }

            <div style={{marginTop: '32px'}}/>

            <h2>Att betala: { totalPrice }kr</h2>
            <StyledLink to='/payment'>
                <CheckoutButton>Betala</CheckoutButton>
            </StyledLink>
            
            <div style={{marginRight: '10%'}}/>
        </Wrapper>
    );

}