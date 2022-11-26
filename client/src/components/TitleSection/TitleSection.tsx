import React from "react";
import { Box, Typography } from "@mui/material";
import { useResponsive } from "../../hooks/useResponsive";

const TitleSection = () => {
  const { isMobile } = useResponsive();

  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} mt={isMobile ? "80px" : ""}>
      <Typography fontSize={isMobile ? "14px" : "16px"} fontWeight={500} color={"#ffffff"} mb={"8px"}>
        We're renting all over the world
      </Typography>
      <Typography
        component={"h1"}
        maxWidth={"852px"}
        fontWeight={800}
        fontSize={isMobile ? "24px" : "48px"}
        color={"#FD790D"}
        lineHeight={isMobile ? "32px" : "56px"}
        marginBottom={isMobile ? "8px" : "16px"}
        textAlign={"center"}
      >
        HURRY UP TO GRAB A CAR WITH A SUPER DISCOUNT UP TO -30%!
      </Typography>
      <Typography color={"#ffffff"} fontWeight={500} fontSize={isMobile ? "14px" : "24px"} textAlign={"center"}>
        Renting cars has never been so easy.<br />
        Book yours with a last minute 30% discount.
      </Typography>
    </Box>

  );
};

export default TitleSection;