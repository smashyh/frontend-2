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
            <ImageBanner $image="Media/Images/foob.jpg"/>
            <TextBanner>Din kundvagn</TextBanner>
            <ShoppingCartReview/>
        </Wrapper>
    );
} 