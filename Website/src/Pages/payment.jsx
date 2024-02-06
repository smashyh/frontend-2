import styled from "styled-components";
import { useState } from "react";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";

const Wrapper = styled.div``;

const Form = styled.form`
    
`;

const InputField = styled.input`
    
`;

function PaymentForm()
{
    const [firstName, setFirstName] = useState('');

    return(
        <Form>
            <label>
            <InputField type="text" placeholder="Förnamn" />
            </label>
            
        </Form>
    )
}

export default function PaymentPage()
{
    return(
    <Wrapper>
        <Header/>
        <ImageBanner $image="Media/Images/foob.jpg"/>
        <TextBanner>Betalning</TextBanner>
        <PaymentForm/>
    </Wrapper>
    );
}