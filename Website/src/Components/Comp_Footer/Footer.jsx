import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, Helvetica;
  width: 100%;
  height: 20px;
  background-color: white;
  color: white;
`;

const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold;
`;

const FooterWrapper = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.3s;
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

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;
      setIsVisible(isBottom);
    };

    const isPageContentShort =
      document.body.offsetHeight <= window.innerHeight;

    setIsVisible(isPageContentShort);

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Background>{/* ... Header or other components ... */}</Background>
      <FooterWrapper isVisible={isVisible}>
        <FooterColumnWrapper>
          <FooterColumn>
            <StyledLink to="/contact">Kontakta oss</StyledLink>
            <StyledLink to="/info">Om oss</StyledLink>
            <StyledLink to="/returns">Returer</StyledLink>
          </FooterColumn>
          <FooterColumn>
            <StyledLink to="/terms">Köpvillkor</StyledLink>
            <StyledLink to="/delivery">Leverans</StyledLink>
            <StyledLink to="/">Hem</StyledLink>
          </FooterColumn>
        </FooterColumnWrapper>
      </FooterWrapper>
    </>
  );
}

export default Footer;
