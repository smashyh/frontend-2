import React from "react";
import styled from "styled-components";
import TextBanner from "../Components/Banners/TextBanner";
import Header from "../Components/Comp_Header/Header";
import ProductShowcase from "../Components/Products/ProductShowcase";
import Footer from "../Components/Comp_Footer/Footer";

const Wrapper = styled.div`
    padding-bottom: 75px;
    box-sizing: border-box;
`;

const OwnersWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const OwnerSection = styled.div`
    flex: 1;
    max-width: 400px;
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
`;

const CompanyHistorySection = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
`;

const OurVisionSection = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
`;

export default function Info() {
    return (
        <Wrapper>
            <Header />
            
            <TextBanner><h2>Om Oss</h2></TextBanner>

            <OwnersWrapper>
                <OwnerSection>
                    <h2>Justus</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                </OwnerSection>

                <OwnerSection>
                    <h2>Anton</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                </OwnerSection>

                <OwnerSection>
                    <h2>Angelo</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                </OwnerSection>
            </OwnersWrapper>

            <CompanyHistorySection>
                <h2>Företagets Historia</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
            </CompanyHistorySection>

            <OurVisionSection>
                <h2>Våra Visioner</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </OurVisionSection>
            <Footer/>
        </Wrapper>
    );
}
