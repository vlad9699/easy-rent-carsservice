import React from "react";
import { Box, Typography } from "@mui/material";
import LogoFooter from "../../assets/logo-footer.svg";
import TelegramIcon from "../../assets/telegram-icon.svg";
import Wahtsupcon from "../../assets/whatsup-icon.svg";

const Footer = () => {
  return (
    <Box component={"footer"} bgcolor={"#242424"} py={"32px"} id={"toContact"}>
      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} gap={"16px"}>
        <img src={LogoFooter} alt="car service" />
        <Typography color={"#fff"} fontWeight={500}>
          easyrent.carservice@gmail.com
        </Typography>
        <Box display={"flex"} gap={"32px"}>
          <Box component={"a"} href={"tg://resolve?domain=easyrent_car"} target={"_blank"}>
            <img src={TelegramIcon} alt="telegram" />
          </Box>
          <Box component={"a"} href={"https://wa.me/message/GT2JQOFW4D6HC1"}>
            <img src={Wahtsupcon} alt="whatsup" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;