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

const TextCard = styled.div`
    display: flex;
    margin: 5% 30%; 
    padding: 0.8rem;
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
            <TextBanner><h2>Byten & Returer</h2></TextBanner>

            <TextCard>
            <h3>Returer</h3>
            <p>
            Vi erbjuder 30 dagars öppet köp på alla produkter.
            En retursedel skickas med ditt paket. Lämna sedan paketet med retursedeln hos närmsta postombud!
            </p>
            </TextCard>
                
            <TextCard>
            <h3>Postombud</h3>
            <p>Vi samarbetar med Postnord för våra leveranser och returer. 
                Undrar du mer angående leveranssätt samt paketspårning besök Postnord <StyledLink to='https://www.postnord.se/'>här</StyledLink>.
            </p>
            </TextCard>
            <QuestionCard> 
                <p>Har du frågor eller behöver ytterligare information?</p>
                <p>Kontakta oss <StyledLink to='/contact'>här</StyledLink>.</p>
                
            </QuestionCard>
        </Wrapper>
    );
} 