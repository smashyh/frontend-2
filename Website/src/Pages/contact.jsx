import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import { AiFillWechat } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiFillPhone } from "react-icons/ai";


const Wrapper = styled.div`
    
`;

const ContactContainer = styled.div`
    display: flex;
    margin: 0 20%; 
    justify-content: center;
    align-items: center;
`;


const ContactCard = styled.div`
    border: solid 1px;
    border-color: black;
    padding: 1rem;
    margin: 8px;
    width: 33%;
    text-align: center;
`;

export default function Contact() {
    return(
        <Wrapper>
            <Header/>
            <TextBanner>Kontaktinfo</TextBanner>
            <ContactContainer>
                <ContactCard>Chat<AiFillWechat /></ContactCard>
                <ContactCard>Email<LiaTelegramPlane /></ContactCard>
                <ContactCard>Call<AiFillPhone /></ContactCard>
            </ContactContainer>
        </Wrapper>
    );
} 