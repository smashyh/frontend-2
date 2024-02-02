import styled from "styled-components";

const Wrapper = styled.div``;

const CartItemStyle = styled.div`
margin: 12px 0 0 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width: 100%;
background-color: white;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
border-radius: 0.375rem;
overflow: hidden;
`;

const CartItemImg = styled.img`
width: 84px;
height: 100%;
min-height: 84px;
max-height: 84px;
border-top-left-radius: 50% 50%;
border-top-right-radius: 50% 50%;
border-bottom-right-radius: 50% 50%;
border-bottom-left-radius: 50% 50%;
object-fit: cover;
object-position: center;
`;

const CartContent = styled.div`
padding: 1.5rem;
`;

const CartItemTitle = styled.h3`
font-family: system-ui, Helvetica;
font-size: 1.25rem;
color: black;
margin-bottom: 0.5rem;
`;

const CartItemPrice = styled.p`
font-family: system-ui, Helvetica;
font-size: 1.10rem;
color: black;
`;

export default function ShoppingCartItem(props)
{
    return(
        <CartItemStyle>
            <CartItemImg src="./Media/Images/adidas.webp"/>
            <CartItemTitle>Adidas Cool</CartItemTitle>
        </CartItemStyle>
    );
}