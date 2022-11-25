import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Alamo from "../../assets/brands/alamo.png";
import Avis from "../../assets/brands/avis.png";
import Budget from "../../assets/brands/budget.png";
import Dollar from "../../assets/brands/dollar.png";
import Enterprise from "../../assets/brands/enterprise.png";
import EuroCar from "../../assets/brands/europcar.png";
import GoldCar from "../../assets/brands/goldcar.png";
import Greenmotion from "../../assets/brands/greenmotion.png";
import Hertz from "../../assets/brands/hertz.png";
import Sixt from "../../assets/brands/sixt.png";
import Thrifty from "../../assets/brands/thrifty.png";
import Audi from "../../assets/audi-mob.png";
import { useResponsive } from "../../hooks/useResponsive";

const brands = [
  { name: "sixt", src: Sixt },
  { name: "europcar", src: EuroCar },
  { name: "hertz", src: Hertz },
  { name: "avis", src: Avis },
  { name: "enterprise", src: Enterprise },
  { name: "thrifty", src: Thrifty },
  { name: "alamo", src: Alamo },
  { name: "dollar", src: Dollar },
  { name: "budget", src: Budget },
  { name: "goldcar", src: GoldCar },
  { name: "greenmotion", src: Greenmotion },
];

const ConnectSection = () => {
  const { isLarge, isMobile } = useResponsive();

  const styleForLeft = () => {
    if (isLarge) return "0"
    return "-470px"
  }

  const styleForTop = () => {
    if (isLarge && !isMobile) return "calc(100% - 750px)"
    if (isMobile) return "calc(100% - 290px)"
    return "50px"
  }

  const style = {
    bg: {
      '&:after': {
        content: '""',
        background: `url(${Audi}) left/100% no-repeat`,
        height: isMobile ? "325px" : "100%",
        maxWidth: "1178px",
        width: "100%",
        top: styleForTop(),
        left: styleForLeft(),
        position: 'absolute',
      }
    }
  }
  const mobImg = {
    width: "100%",
    height: "100%",
    maxHeight: "64px",
    maxWidth: "180px",
  }
  const styleForImg = () => mobImg

  const renderBrands = () => {
    return brands.map((el) => (
      <img key={el.name} src={el.src} alt={el.name} style={styleForImg()} />
    ));
  };
  return (
    <Box sx={style.bg} component={"section"} py={isMobile ? "80px" : "104px"} bgcolor={"#F9F9F8"} position={"relative"} height={isLarge ? "1000px" : ''}>
      <Container maxWidth={"lg"}>
        <Typography component={"h2"} fontWeight={700} fontSize={isMobile ? "24px" : "32px"} textAlign={"center"} mb={"64px"}>
          WE CONNECT YOU WITH <Typography component={"span"} fontWeight={700} fontSize={isMobile ? "24px" : "32px"} color={"#FD790D"}>800+
          TRUSTED SUPPLIERS</Typography>
        </Typography>
        <Box display={"flex"}  justifyContent={isMobile ? "center" : "flex-end"}>
          <Box display={!isMobile ? "flex" : "grid"}
               gridTemplateColumns={isMobile ? "1fr 1fr" : ""}
               justifyContent={isLarge ? "space-between" : ""}
               gap={"24px"}
               maxWidth={isLarge ? "100%" : "588px"}
               flexWrap={!isMobile ? "wrap" : "nowrap"}>
            {renderBrands()}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};



export default ConnectSection;