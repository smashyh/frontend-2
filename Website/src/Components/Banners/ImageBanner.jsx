import styled from "styled-components";

const Wrapper = styled.div`
    
    img
    {
        align-items: center;
        width: 100%;
        height: 50%;
        object-fit: fill;
    }
`;

export default function ImageBanner(props)
{
    return(
        <Wrapper>
            <img src={ props.$image } alt="Image"/>
        </Wrapper>
    );
}