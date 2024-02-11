import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Header from "../Components/Comp_Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderItem from "../Components/ShoppingCartRelated/OrderItem";
import Footer from "../Components/Comp_Footer/Footer";


const Wrapper = styled.div`
    padding-bottom: 75px;
    box-sizing: border-box;
`;

const StyledLink = styled(Link)`

    //text-decoration: none;
    color: inherit;
`;

const OrderDiv = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    p {
        margin-right: 5px;
    }
    
`;


const ThanksCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    background-color: #f8f8f8;

    h1 {
      font-size: 4rem;
      text-decoration: underline;
    }

    h2 {
        display: flex;
        justify-content: center;
    }

    p {
        font-size: 1.5rem;
        text-align: center;
    }
`;
function OrderNummer() 
{
    const [randomNumber, setRandomNumber] = useState(null);
  
    useEffect(() => {
      generateRandomNumber();
    }, []); 
  
    const generateRandomNumber = () => {
      const min = 1000000000; 
      const max = 9999999999; 
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(newRandomNumber);
    };

    return (
        <div>
            {randomNumber && <p>{randomNumber}</p>} 
        </div>
    );
}

const localStorageCartName = 'temp_cart';

function OrderReview()
{
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>
    {
        
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

    return(
        <Wrapper>
            <div style={{marginLeft: '10%'}}/>
            {
                shoppingCart.map(item => <OrderItem
                    key={ item.id }
                    $name={ item.name }
                    $image={ item.image }
                    $price={ item.price }
                    $productID={ item.productId }
                />)
            }

            <div style={{marginTop: '32px'}}/>

            <h2>Totala Summan: { totalPrice }kr</h2>
            
            
            <div style={{marginRight: '10%'}}/>
        </Wrapper>
    );
}

export default function Confirmation() {
    return(
        <Wrapper>
            <Header/>
            
            <ThanksCard>
                
                <h1>Tack för ditt köp hos oss!</h1>
                <OrderDiv>
                <p>Ordernr: </p> <OrderNummer/>
                </OrderDiv>
                <p> Din betalning har nu bekräftats och din order förbereds! Tack för att du handlar hos oss på Juangelton! Vi hoppas att du blir nöjd så ses vi igen!</p> 
                <p> Undrar du mer om leveranssätt och hur du kan spåra din order, tryck <StyledLink to='/delivery'>här.</StyledLink></p>
                <OrderDiv>
                <p>Din order:</p>
                </OrderDiv>
                <OrderReview></OrderReview>

            </ThanksCard>
            <Footer/>
        </Wrapper>
    );
} 