import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Header from "../Components/Comp_Header/Header";
import TextBanner from "../Components/Banners/TextBanner";
import ProductDetails from "../Components/Products/ProductDetails";
import Footer from "../Components/Comp_Footer/Footer";

const Wrapper = styled.div``;

const ProductWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function ProductPage(props)
{
    const { productID } = useParams();
    return(
        <Wrapper>
            <Header/>
            <TextBanner><h2>Produkt</h2></TextBanner>
            <ProductWrap>
                <ProductDetails $productID={productID}/>
            </ProductWrap>
            <Footer/>
        </Wrapper>
    );
}