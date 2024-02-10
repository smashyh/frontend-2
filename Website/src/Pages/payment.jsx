import styled from "styled-components";
import { useState } from "react";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import axios from "axios";
import Footer from "../Components/Comp_Footer/Footer";

const Wrapper = styled.div`
    
`;

//text css verkar inte följa med, workaround
const TxtWrap = styled.div`
    font-size: 2rem;
`;

const StyledLink = styled(Link)`

    text-decoration: none;
    color: inherit;
`;


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

const localStorageCartName = 'temp_cart';

async function makePurchase(firstName, senderEmail)
{
    const cart = JSON.parse(localStorage.getItem(localStorageCartName));
    if (cart === undefined || cart.length == 0)
    {
        return;
    }

    let receiptProducts = "";
    let price = 0;
    
    const config = 
    {
        headers: { Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY },
    };

    for (let i = 0; i < cart.length; i++)
    {
        const data = await axios.get(import.meta.env.VITE_STRAPI_URL + `/api/products?populate=*&filters[product_id][$eq]=${cart[i]}`, config);

        // check if invalid item and skip if it is
        if (data === undefined || data === null)
        {
            continue;
        }

        const item = data.data.data[0];

        if (item.attributes.in_stock == 0)
        {
            return;
        }

        const request = 
        {
            data:
            {
                in_stock: item.attributes.in_stock - 1,
            }
        };

        //console.log()

        // await axios.put(import.meta.env.VITE_STRAPI_URL + `/api/products?populate=*&filters[product_id][$eq]=${cart[i]}`, putConfig);
        await axios.put(import.meta.env.VITE_STRAPI_URL + `/api/products/${item.id}`, request, config);

        receiptProducts += `${item.attributes.name} - ${item.attributes.price}kr\n`;
        // ({
        //     name: item.attributes.name,
        //     price: item.attributes.price,
        // });

        price += item.attributes.price;
    }

    let content =
    {
        to_name: firstName,
        receipt: receiptProducts + "Totalt: " + price + "kr",
        customer_email: senderEmail,
    };

    emailjs.send
    (
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_RECEIPT_TEMPLATE_ID,
        content,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
}

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
                    <NameField type="text" placeholder="Förnamn" onChange={ (e) => setFirstName(e.target.value) } />
                </LabelContainer>

                <LabelContainer>
                    <Label>Efternamn</Label>
                    <NameField type="text" placeholder="Efternamn" />
                </LabelContainer>
                
                <LabelContainer>
                    <Label>Email</Label>
                    <EmailField type="text" placeholder="Email-Adress" onChange={ (e) => setEmail(e.target.value) } />
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
                

                <StyledLink to='/confirmation'><PayButton onClick={ () => makePurchase(firstName, email) }>Betala</PayButton></StyledLink>
                </InputCard>
    )
}

export default function PaymentPage()
{
    return(
    <Wrapper>
        <Header/>
        <TxtWrap>
        <TextBanner>Betalning</TextBanner>
        </TxtWrap>
        <PaymentForm/>
        <Footer/>
    </Wrapper>
    );
}