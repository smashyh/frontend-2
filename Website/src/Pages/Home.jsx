import styled from "styled-components";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import TextBanner from "../Components/Banners/TextBanner";
import ProductShowcase  from "../Components/Products/ProductShowcase";

const Wrapper = styled.div`
    
`;

export default function Home() 
{
    return(
        <Wrapper>
            <Header/>
            <ImageBanner $image="Media/Images/foob.jpg"/>
            <TextBanner>Nya produkter</TextBanner>
            <ProductShowcase $filter=''/>
        </Wrapper>
    );
    
}