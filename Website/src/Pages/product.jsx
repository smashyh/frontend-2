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
            <ImageBanner $image="http://localhost:1337/uploads/foob_09005fa915.jpg"/>
            <ProductDetails $productID={productID}/>
        </Wrapper>
    );
}