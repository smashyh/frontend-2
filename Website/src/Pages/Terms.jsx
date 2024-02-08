import React from "react";
import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  /* Add your global styling here */
`;

const StyledLink = styled(Link)`
  /* Add styling for your links if needed */
  color: inherit;
`;

const SectionWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center; /* Center-align titles */
`;

const SmallSectionWrapper = styled(SectionWrapper)`
  max-width: 400px;
  padding: 10px; /* Adjust padding for smaller size */
`;

const Content = styled.p`
  /* Customize the styling for content paragraphs */
`;

export default function Terms() {
  return (
    <Wrapper>
      <Header />
      <TextBanner><h2>Köpvillkor</h2></TextBanner>

      <SectionWrapper>
        <h2>Allmänna Villkor</h2>
        <Content>
          Välkommen till våra köpvillkor. Här hittar du information om ditt
          köp och användning av våra tjänster. Läs igenom villkoren noggrant
          innan du genomför ditt köp.
        </Content>
      </SectionWrapper>

      <SectionWrapper>
        <h2>Köp och Betalning</h2>
        <Content>
        <p>
          Köp och betalning kan ske på flera olika sätt, just nu erbjuder vi betalning via: <h4>Klarna, Bankkort, Swish samt Paypal.</h4>
        </p>
        
          
        </Content>
      </SectionWrapper>

      <SectionWrapper>
        <h2>Leverans och Returer</h2>
        <Content>
          <p>
          Vår standardleverans är mellan 2-4 arbetsdagar. Vänligen notera att under högsäsong och rea kan leveransen av ditt paket ta längre tid. 
          Den aktuella leveranstiden för din beställning visas i kassan och på din orderbekräftelse.
          Vi levererar paket till personer som är 16 år eller äldre och har en registrerad hemadress i Sverige.
          </p>
          <p>
            Vi erbjuder 30 dagars öppet köp på ALLA produkter - HELT GRATIS.
            Retur sedel skickas med ditt paket och klistras på paketet och lämnas på närmaste postbud.
          </p>
          
        </Content>
      </SectionWrapper>

      <SectionWrapper>
        <h2>Sekretess</h2>
        <Content>
          <p>
            Din sekretess tas på allvar. Vi behandlar dina personuppgifter på ett sådant sätt som skyddar dig från allmänheten genom att följa de lagar som gäller.
          
          </p>
         
        </Content>
      </SectionWrapper>

      <SmallSectionWrapper>
        <Content>
          Har du frågor eller behöver ytterligare information? Kontakta oss{" "}
          <StyledLink to="/contact">här</StyledLink>.
        </Content>
      </SmallSectionWrapper>
    </Wrapper>
  );
}
