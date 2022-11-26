import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../../components/Header/Header";
import Car from "../../assets/main.webp";
import CarMob from "../../assets/test.webp";
import TitleSection from "../../components/TitleSection/TitleSection";
import FormSection from "../../components/FormSection/FormSection";
import StepsSection from "../../components/StepsSection/StepsSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import DifferentSection from "../../components/DifferentSection/DifferentSection";
import ConnectSection from "../../components/ConnectSection/ConnectSection";
import Footer from "../../components/Footer/Footer";
import { useResponsive } from "../../hooks/useResponsive";


const MainPage = () => {
  const { isMobile, isTablet } = useResponsive();
const bgSize = () => {
  if (isTablet) return '200%'
  return '100%'
}
  const bgMainImg = {
    background: !isMobile ? `url(${Car}) top/${bgSize()} no-repeat fixed` : `url(${CarMob}) top/${bgSize()} no-repeat fixed`,
    height: "100%",
    maxHeight: isMobile ? "570px" : "784px",
  };

  return (
    <Box sx={bgMainImg}>
      <Header />
      <Box component={"main"} marginTop={{ lg: "80px", md: "40px" }}>
        <Container maxWidth={"lg"}>
          <TitleSection />
          <FormSection />
          <StepsSection />
        </Container>
        <AboutSection />
        <Container maxWidth={"lg"}>
          <DifferentSection />
        </Container>
        <ConnectSection />
      </Box>
      <Footer />
    </Box>
  );
};



export default MainPage;