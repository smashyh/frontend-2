import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Footer from "../Components/Comp_Footer/Footer";

const Wrapper = styled.div`
    padding-bottom: 75px;
    box-sizing: border-box;
`;

const StyledLink = styled(Link)`

    //text-decoration: none;
    color: inherit;
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

const InputBox = styled.div`
    
    input {
        width: 400px;
        height: 40px;
        border: 2px #a0a0a0;
        border-radius: 10rem;
        outline: none;
        padding-left: 1rem;
        font-weight: bold;
    }

    button {
        margin-left: 1rem;
        border-radius: 10rem;
        cursor: pointer;
        background-color: white;
        border: 2px #a0a0a0;
        height: 40px;
        width: 80px;
        font-weight: bold;
        font-size: 1rem;
    }

`;

export default function Delivery() {
    return(
        <Wrapper>
            <Header/>
            
            <TextBanner><h2>Leverans</h2></TextBanner>
            <TextCard>
                <h3>Leveranstider</h3>
                <p>Vår standardleverans är mellan 2-4 arbetsdagar. Vänligen notera att under högsäsong och rea kan leveransen av ditt paket ta längre tid. 
                    Den aktuella leveranstiden för din beställning visas i kassan och på din orderbekräftelse.
                    Vi levererar paket till personer som är 16 år eller äldre och har en registrerad hemadress i Sverige. </p>
            </TextCard>

            <TextCard>
                <h3>SPÅRA DITT PAKET</h3>
                <InputBox>
                <input placeholder='Ordernummer'></input>
                <button><FaSearch />Spåra</button>
                </InputBox>
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
            <Footer/>
        </Wrapper>
    );
} 