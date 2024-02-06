import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    
`;

const StyledLink = styled(Link)`

    //text-decoration: none;
    color: inherit;
`;

const QuestionCard = styled.div`
    display: flex;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 10%; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 8px;
`;

export default function Returns() {
    return(
        <Wrapper>
            <Header/>
            <TextBanner>Byten & Returer</TextBanner>
            <QuestionCard> 
                <h5>Fick du inte svar på det du undrade?</h5>
                <p>Kontakta oss <StyledLink to='/contact'>här</StyledLink></p>
                
            </QuestionCard>
        </Wrapper>
    );
} 