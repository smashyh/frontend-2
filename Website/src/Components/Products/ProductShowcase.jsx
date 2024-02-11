import styled from "styled-components";
import ProductBox from "./ProductBox";


const ProductContainer = styled.div`
    margin: 32px 32px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-wrap: wrap;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
`;

/**
 * Parameters:
 * $filter: The Strapi REST API fetch filter, added to the response url. Always start with a question mark.
 *  
 */

export default function ProductShowcase(props)
{
    return(
        <ProductContainer>
            {
                props.$products.map(product => <ProductBox
                    key={ product.id }
                    $name={ product.name }
                    $image={ product.image }
                    $description={ product.description }
                    $price={ product.price }
                    $productId={ product.productId }
                />)
            }
        </ProductContainer>
    );
}