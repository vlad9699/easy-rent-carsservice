import React from "react";
import { Box, Typography } from "@mui/material";
import LogoFooter from '../../assets/logo-footer.svg'
import { Link } from "react-router-dom";
import TelegramIcon from '../../assets/telegram-icon.svg'
import Wahtsupcon from '../../assets/whatsup-icon.svg'

const Footer = () => {
  return (
    <Box component={"footer"} bgcolor={"#242424"} py={"32px"} id={"toContact"}>
      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} gap={"16px"}>
        <img src={LogoFooter} alt="car service" />
        <Typography color={"#fff"} fontWeight={500}>
          easyrent.carservice@gmail.com
        </Typography>
        <Box display={"flex"} gap={"32px"}>
          <Link to={'https://google.com'}>
            <img src={TelegramIcon} alt="telegram" />
          </Link>
          <Link to={'https://google.com'}>
            <img src={Wahtsupcon} alt="whatsup" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;