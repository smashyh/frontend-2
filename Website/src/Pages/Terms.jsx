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
      <TextBanner>Köpvillkor</TextBanner>

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
        <p>Köp och betalning kan ske på flera olika sätt, just nu erbjuder vi betalning via: <h4>Klarna, Bankkort, Swish samt Paypal.</h4></p>
        
          
        </Content>
      </SectionWrapper>

      <SectionWrapper>
        <h2>Leverans och Returer</h2>
        <Content>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Vestibulum auctor metus vel nunc fringilla, eu
          vehicula ligula consequat.
        </Content>
      </SectionWrapper>

      <SectionWrapper>
        <h2>Sekretess</h2>
        <Content>
          Proin commodo augue id metus fermentum, non faucibus arcu pretium.
          Curabitur et nunc vel ligula aliquam fermentum non sit amet elit.
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
