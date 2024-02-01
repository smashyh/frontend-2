import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import ProductShowcase from "../Components/Products/ProductShowcase";


const Wrapper = styled.div`
    
`;

export default function Info() {
    return(
        <Wrapper>
            <Header/>
            <TextBanner>Om oss</TextBanner>
            <ProductShowcase $filter=''/>
        </Wrapper>
    );
} 