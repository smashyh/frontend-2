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
    margin: 10% 20%; 
    justify-content: center;
    align-items: center;
`;


const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background-color: #f0f0f0;
    padding: 1rem;
    margin: 8px;
    width: 33%;
    text-align: center;

    svg {
        font-size: 5em;
        margin-bottom: 3rem;
    }
    button {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: white;
        background-color: black;
        border: none;
        padding: 0.8rem 6rem;
    }
    button:hover {
        cursor: pointer;
        background-color: #4e4e4e;
    }
`;

export default function Contact() {
    return(
        <Wrapper>
            <Header/>
            <TextBanner><h2>Kontaktinfo</h2></TextBanner>
            <ContactContainer>

                <ContactCard>
                <AiFillWechat />
                <button>Chatta Med Oss</button>
                <p>Mån - Sön 24/7</p>
                </ContactCard>

                <ContactCard>
                <LiaTelegramPlane />
                <button>Maila Oss</button>
                <p>Maila oss så hör vi av oss så fort vi kan!</p>
                </ContactCard>

                <ContactCard>
                <AiFillPhone />
                <button>033-14 00 10</button>
                <p>Mån - Lör 8 - 16</p>
                </ContactCard>

            </ContactContainer>
        </Wrapper>
    );
} 