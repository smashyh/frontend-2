import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import ProductDetails from "../Components/Products/ProductDetails";

const Wrapper = styled.div``;

export default function ProductPage(props)
{
    const { productID } = useParams();
    return(
        <Wrapper>
            <Header/>
            <ImageBanner $image={import.meta.env.VITE_STRAPI_URL + "uploads/foob_c9ef7b563a.jpg"}/>
            <ProductDetails $productID={productID}/>
        </Wrapper>
    );
}