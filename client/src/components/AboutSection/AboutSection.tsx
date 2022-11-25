import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Jeep from "../../assets/jeep.png";
import { useResponsive } from "../../hooks/useResponsive";



const AboutSection = () => {
  const { isLarge, isLargeTablet, isMobile, isTablet } = useResponsive();

  const styleForBg = () => {
    if (isLarge && !isMobile && !isLargeTablet) return "80%"
    if (isLargeTablet && !isMobile) return "110%"
    if (isMobile) return "128%"
    return "100%"
  }
  const styleForWith = () => {
    if (isLarge && !isMobile ) {
      return "580px"
    }
    return "914px"
  }
  const styleForTop = () => {
    if (isLarge && !isLargeTablet && !isMobile) {
      return "170px"
    }
    if (isLargeTablet && !isMobile) {
      return "320px"
    }
    if (isMobile) {
      return "calc(100% - 670px)"
    }
    return 0
  }

  const heightBlock = () => {
    if (isLargeTablet && !isMobile) return "1200px"
    if (isMobile) return "1260px"
    return ""
  }

  const styleForHeight = () => {
    if (isLarge && !isMobile) return "100%"
    if (isLargeTablet && !isMobile) return "914px"
    if (isMobile) return "914px"
    return "100%"
  }
  const style = {
    bg: {
      '&:after': {
        content: '""',
        background: `url(${Jeep}) right/${styleForBg()} no-repeat`,
        height: styleForHeight(),
        maxWidth: styleForWith(),
        width: "100%",
        top: styleForTop(),
        right: 0,
        position: 'absolute',
      }
    }
  }

  const heightForBlock = () => {
    if (isLarge && !isLargeTablet) return "588px"
    if (isLargeTablet && !isTablet) return "488px"
    if (isTablet) return "100%"
    return "588px"
  }
  return (
    <Box id={"toAboutUs"} sx={style.bg} component={"section"} py={isMobile ? "80px" : "104px"} bgcolor={"#F9F9F8"} position={"relative"} height={heightBlock()}>
      <Container maxWidth={"lg"}>
        <Typography component={"h2"} color={"#FD790D"} fontSize={isMobile ? "24px" : "32px"} fontWeight={700} mb={"24px"} textAlign={isMobile ? "center" : "left"}>
          ABOUT US
        </Typography>
        <Box maxWidth={heightForBlock()}>
          <Typography mb={"8px"}>
            Renting a car is a major step in accomplishing your travel plans before you leave home. Car rental is a
            necessary part of your travel experience, and we are here to help, at Easy Rent Car Service.
          </Typography>
          <Typography mb={"8px"}>
            - We do not charge any fees to book your car.
          </Typography>
          <Typography mb={"8px"}>
            - There is no prepayment or cancellation fees.
          </Typography>
          <Typography mb={"8px"}>
            - We work with the major car rental companies to make sure you will receive only the highest level service,
            both from the car providers, and our own experienced staff.
          </Typography>
          <Typography>
            We offer great customer service 24/7, with staff available to answer any questions and to help you choose
            the best rental options for your needs! We've got your back!
            If you run into any problems, - we are here to help, even at the post rental period!
            We offer competitive prices and discounts for major car companies.
            You have come to the right place to secure your car rental, whether you are traveling to your favorite
            country, and staying there for the long term, or you are planning an island-hopping adventure, taking in the
            sights and experiences of a few islands, and we are here to assist you with options, helping you save your
            money for tours, and adventures once you arrive.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;