import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import ProductDetails from "../Components/Products/ProductDetails";

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
            <ProductWrap>
            <ProductDetails $productID={productID}/>
            </ProductWrap>
        </Wrapper>
    );
}