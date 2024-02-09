import styled from "styled-components";

const TextBanner = styled.div`
    margin: -4px 0 0 0; // Weird workaround because of white bars
    padding: 32px 0 32px 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    background-color: var(--bannerColor);
    color: black;
    font-weight: bold;
`;

export default TextBanner;

// export default function TextBanner(props)
// {
//     return(
//         <TextBannerStyle $height={ props.$height }>
//             { props.$text }
//         </TextBannerStyle>
//     );
// }