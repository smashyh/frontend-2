import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, Helvetica;
  width: 100%;
  height: 84px;
  background-color: #E4D8C5;
  color: white;
`;

const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold; 
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333; 
  color: white; 
  padding: 10px; 
  display: flex;
  align-items: center; 
  justify-content: space-around;
  height: 75px; 
`;

const FooterColumnWrapper = styled.div`
  display: flex;
  gap: 50px; 
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px; 
  width: 100px; 
  justify-content: space-around;
  
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold; 
`;

function CategoryDropdownButton(props) {}

function Footer() {
  return (
    <FooterWrapper>
      <FooterColumnWrapper>
        <FooterColumn>
          <StyledLink to='/contact'>Kontakta oss</StyledLink>
          <StyledLink to='/info'>Om oss</StyledLink>
          <StyledLink to='/returns'>Returer</StyledLink>
        </FooterColumn>
        <FooterColumn>
          <StyledLink to='/terms'>Köpvillkor</StyledLink>
          <StyledLink to='/delivery'>Leverans</StyledLink>
          <StyledLink to='/'>Hem</StyledLink>
        </FooterColumn>
      </FooterColumnWrapper>
    </FooterWrapper>
  );
}

export default Footer;
