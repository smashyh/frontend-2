import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import ShoppingCartReview from "../Components/ShoppingCartRelated/ShoppingCartReview";

const Wrapper = styled.div`
    
`;

export default function ShoppingCartPage() 
{
    return(
        <Wrapper>
            <Header/>
            <ImageBanner $image="http://localhost:1337/uploads/foob_c9ef7b563a.jpg"/>
            <TextBanner><h2>Din kundvagn</h2></TextBanner>
            <ShoppingCartReview/>
        </Wrapper>
    );
} 