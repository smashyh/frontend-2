import styled from "styled-components";
import { useRef, useState } from "react";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import emailjs from '@emailjs/browser';
import Footer from "../Components/Comp_Footer/Footer";

const Wrapper = styled.div``;

const InputCard = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;
    margin-left: 33%;
    margin-right: 33%;
    padding: 1rem;
    border: 1px solid black;
    background-color: #f8f8f8;
`;

const LabelContainer = styled.div`
    position: relative;
    margin-bottom: 0.5rem;
    padding-top: 1rem;
`;

const Label = styled.label`
    position: absolute;
    top: 0;
    left: 8px;
    font-weight: bold;
`;

const ShortField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 525px;
`;

const BigField = styled.textarea `
    border: 1px solid black;
    margin: 0.5rem;
    height: 256px;
    width: 525px;
`;

const SendButton = styled.button`
    font-family: system-ui, Helvetica;
    font-size: 1.10rem;
    border-width: 0;
    background-color: black;
    color: white;
    font-weight: bold;
    transition: ease background-color 250ms;
    width: 400px;
    height: 48px;
    margin-top: 1rem;
    cursor: pointer;
    &:hover
    {
        background-color: grey;
    }
`;

function ContactForm()
{
    const form = useRef();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function onSubmitMessage(e)
    {
        e.preventDefault();
        console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
        emailjs.sendForm
        (
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );

        alert("Tack för ditt meddelande! Vi hör av oss så snart vi kan.");
    }

    return(
        <InputCard ref={ form } onSubmit={ onSubmitMessage }>
        <LabelContainer>
            <Label>Ditt namn</Label>
            <ShortField type="text" placeholder="Namn" name="from_name" onChange={ (e) => { setName(e.target.value); } } />
        </LabelContainer>

        <LabelContainer>
            <Label>E-postadress</Label>
            <ShortField type="text" placeholder="name@example.com" name="from_email" onChange={ (e) => { setEmail(e.target.value); } } />
        </LabelContainer>

        <LabelContainer>
            <Label>Meddelande</Label>
            <BigField type="comment" name="message" onChange={ (e) => { setMessage(e.target.value); } } />
        </LabelContainer>

        <SendButton onClick={ onSubmitMessage }>Skicka</SendButton>

        </InputCard>
    )
}

export default function ContactFormPage()
{
    return(
        <Wrapper>
            <Header/>
            <TextBanner><h2>Kontakt</h2></TextBanner>
            <ContactForm/>
            <Footer/>
        </Wrapper>
        );
    }