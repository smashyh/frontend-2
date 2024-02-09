import styled from "styled-components";
import { Link } from "react-router-dom";

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
width: 100%;
height: 100%;
min-width: 96px;
min-height: 96px;
max-width: 96px;
max-height: 96px;
margin: 4px;
overflow: hidden;
`;

const CartContent = styled.div`
padding: 1.5rem;
`;

const CartItemTitle = styled.h3`
font-family: system-ui, Helvetica;
font-size: 1.25rem;
white-space: normal;
color: black;
margin-bottom: 0.5rem;
`;

const CartItemPrice = styled.p`
display: flex;
font-family: system-ui, Helvetica;
font-size: 1.10rem;
color: black;
`;


export default function ShoppingCartItem(props)
{
    return(
        <CartItemStyle>
            <div style={{ marginLeft: "5%" }}/>
            
            <Link to={"/product/" + props.$productID}>
            <div>
            <CartItemImg src={props.$image}/>
            </div>
            </Link>
            
            <div style={{ marginRight: "5%" }}/>

            <Link to={"/product/" + props.$productID}>
                <CartItemTitle>{props.$name}</CartItemTitle>
            </Link>

            <div style={{ display: "flex", flexDirection: "row", width: '100%', }}/>
            <CartItemPrice>{props.$price}kr</CartItemPrice>

            <div style={{ marginRight: "5%" }}/>

            
            <div style={{ marginRight: "5%" }}/>
        </CartItemStyle>
    );
}