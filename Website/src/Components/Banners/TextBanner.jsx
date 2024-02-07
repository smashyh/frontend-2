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
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
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