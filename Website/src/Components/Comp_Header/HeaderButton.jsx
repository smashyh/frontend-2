import styled from "styled-components";

const Wrapper = styled.div``;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 128px;
    height: 84px;
    cursor: pointer;
    background-color: var(--bannerColor);
    color: black;
    font-weight: bold;
    &:hover
    {
        background-color: var(--bannerHoverColor);
    }
`;

export default function HeaderButton(props)
{
    return(
        <Wrapper>
            <Background>
                { props.text }
            </Background>
        </Wrapper>
    );
}