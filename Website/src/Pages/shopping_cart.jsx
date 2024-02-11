import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import ShoppingCartReview from "../Components/ShoppingCartRelated/ShoppingCartReview";
import Footer from "../Components/Comp_Footer/Footer";

const Wrapper = styled.div`
    padding-bottom: 75px;
    box-sizing: border-box;
`;

export default function ShoppingCartPage() 
{
    return(
        <Wrapper>
            <Header/>
            <TextBanner><h2>Din kundvagn</h2></TextBanner>
            <ShoppingCartReview/>
            <Footer/>
        </Wrapper>
    );
} 