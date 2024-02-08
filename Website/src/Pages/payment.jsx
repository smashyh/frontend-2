import styled from "styled-components";
import { useState } from "react";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";

const Wrapper = styled.div``;


const InputCard = styled.div`
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

const NewsLabel = styled.label`
    margin-top: 10rem;
`;

const NameField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 250px;
`;

const AddressField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 525px;
`;

const EmailField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 525px;
`;

const SweField = styled.select`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 90px;
`;

const NumberField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 425px;
`;

const BdayField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 50px;
    text-align: center;
`;

const ByearField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 90px;
    text-align: center;
`;

const PcodeField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 120px;
    text-align: center;
`;

const CardField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 375px;
`;

const DateField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 50px;
    text-align: center;
`;

const SecurityField = styled.input`
    border: 1px solid black;
    margin: 0.5rem;
    height: 25px;
    width: 50px;
    text-align: center;
`;

const PayButton = styled.button`
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

function PaymentForm()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [number, setNumber] = useState('');

    return(
                <InputCard>
                <LabelContainer>
                    <Label>Förnamn</Label>
                    <NameField type="text" placeholder="Förnamn" />
                </LabelContainer>

                <LabelContainer>
                    <Label>Efternamn</Label>
                    <NameField type="text" placeholder="Efternamn" />
                </LabelContainer>
                
                <LabelContainer>
                    <Label>Email</Label>
                    <EmailField type="text" placeholder="Email-Adress" />
                </LabelContainer>
                
                <LabelContainer>
                    <Label>Adress 1</Label>
                    <AddressField type="text" placeholder="Adressrad 1" />
                </LabelContainer>

                <LabelContainer>
                    <Label>Adress 2</Label>
                    <AddressField type="text" placeholder="Adressrad 2" />
                </LabelContainer>
                

                {/* Fuskfix så den är på samma linje som telefonnr inputen */}
                <LabelContainer>
                    <Label></Label>
                    <SweField value ={countryCode}>
                    <option value='+1'>+1 (USA)</option>
                    <option value='+46'>+46 (Sweden)</option>
                    </SweField>
                </LabelContainer>

                <LabelContainer>
                    <Label>Telefon</Label>
                    <NumberField type="text" placeholder="Telefonnummer" />
                </LabelContainer>


                <LabelContainer>
                    <Label>Dag</Label>
                    <BdayField type="number" min="0" max="31" placeholder="DD"/>
                </LabelContainer>
                
                <LabelContainer>
                    <Label>Månad</Label>
                    <BdayField type="number" min="0" max="12" placeholder="MM"/>
                </LabelContainer>

                <LabelContainer>
                    <Label>År</Label>
                    <ByearField type="number" placeholder="YY"/>
                </LabelContainer>

                <LabelContainer>
                    <Label>Postkod</Label>
                    <PcodeField type="text" placeholder="Postal Code"/> 
                </LabelContainer>

                <LabelContainer>
                    <Label>Kortnummer</Label>
                    <CardField type="text" placeholder="xxxx-xxxx-xxxx-xxxx"/> 
                </LabelContainer>

                <LabelContainer>
                    <Label>MM/YY</Label>
                    <DateField type="text" placeholder="MM/YY"/> 
                </LabelContainer>

                <LabelContainer>
                    <Label>CVV</Label>
                    <SecurityField type="text" placeholder="* * *"/> 
                </LabelContainer>
                
                <NewsLabel>
                Jag vill få nyhetsbrev skickad till min epostadress
                <input type="checkbox"></input>

                </NewsLabel>
                

                <PayButton>Betala</PayButton>
                </InputCard>
    )
}

export default function PaymentPage()
{
    return(
    <Wrapper>
        <Header/>
        <TextBanner>Betalning</TextBanner>
        <PaymentForm/>
    </Wrapper>
    );
}