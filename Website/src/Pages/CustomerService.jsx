import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import { Link } from "react-router-dom";
import { FiPackage } from "react-icons/fi";
import { IoIosReturnLeft } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import Footer from "../Components/Comp_Footer/Footer";


const StyledLink = styled(Link)`

    //text-decoration: none;
    color: inherit;
`;

const Wrapper = styled.div`
    padding-bottom: 75px;
    box-sizing: border-box;
`;

const ServiceContainer = styled.div`
    display: flex;
    margin: 5% 30%; 
    justify-content: center;
    align-items: center;
`;

const TextCard = styled.div`
    display: flex;
    margin: 5% 30%; 
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

const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 8px;
    width: 10%;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 8px;

    svg {
        font-size: 3em;
    }
`;


export default function CustomerService() {
    return(
        <Wrapper>
            <Header/>
            
            <TextBanner><h2>Kundservice</h2></TextBanner>
            <TextCard> 
                <h2>Välkommen till kundservice!</h2>
                <h3>Här hittar du svar på de vanligaste frågorna</h3>
            </TextCard>
            
            <ServiceContainer>
            <ServiceCard>
                <StyledLink to='/delivery'><FiPackage /></StyledLink>
                Leverans
            </ServiceCard>

            <ServiceCard>
                <StyledLink to='/returns'><IoIosReturnLeft /></StyledLink>
                Returer
            </ServiceCard>

            <ServiceCard>
                <StyledLink to='/terms'><CiCreditCard1 /></StyledLink>
                Köpvillkor
            </ServiceCard>

            </ServiceContainer>
            <QuestionCard> 
                <p>Fick du inte svar på det du undrade?</p>
                <p>Kontakta oss <StyledLink to='/contact'>här</StyledLink>.</p>
                
            </QuestionCard>
            <Footer/>
        </Wrapper>
    );
} 