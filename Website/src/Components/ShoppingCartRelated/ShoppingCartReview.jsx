import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";

const Wrapper = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default function ShoppingCartReview()
{
    return(
        <Wrapper>
            <div style={{marginLeft: '64px'}}/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <div style={{marginRight: '64px'}}/>
        </Wrapper>
    );
}