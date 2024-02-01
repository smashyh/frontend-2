import styled from "styled-components";
import Header from "../Components/Comp_Header/Header";
import TextBanner from "../Components/Banners/TextBanner";
import ProductShowcase from "../Components/Products/ProductShowcase";


const Wrapper = styled.div`
    
`;

export default function Products() {
    return(
        <Wrapper>
            <Header/>
            <TextBanner>Om oss</TextBanner>
            <ProductShowcase $filter=''/>
        </Wrapper>
    );
} 