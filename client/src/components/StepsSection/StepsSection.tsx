import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowIcon from "../../assets/arrow-icon.svg";
import ArrowOneIcon from "../../assets/arrow-one-icon.svg";
import ArrowTwoIcon from "../../assets/arrow-two-icon.svg";
import MsgIcon from "../../assets/msg-icon.svg";
import CarIcon from "../../assets/car-icon.svg";
import style from "./StepsSection.module.css";
import { useResponsive } from "../../hooks/useResponsive";

const StepsSection = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Box component={"section"} my={isMobile ? "80px" : "104px"} id={"toSimpleSteps"}>
      <Typography fontSize={isMobile ? "24px" : "32px"} fontWeight={700} textAlign={"center"} mb={"16px"}>
        THREE SIMPLE STEPS
      </Typography>
      <Typography fontSize={"16px"} color={"#6A6A6A"} textAlign={"center"} mb={"60px"}>
        Do these simple steps and start feeling your new experience
      </Typography>
      <Box className={style.box}>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"16px"}>
          <img src={ArrowIcon} alt="arrow" />
          <Typography fontSize={"18px"} fontWeight={500} maxWidth={"304px"} textAlign={"center"}>
            Put all the information about your trip
          </Typography>
        </Box>
        {!isTablet && (
          <Box mt={"30px"}>
            <img src={ArrowOneIcon} alt="arrow" />
          </Box>
        )}
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"16px"}>
          <img src={MsgIcon} alt="arrow" />
          <Typography fontSize={"18px"} fontWeight={500} maxWidth={"304px"} textAlign={"center"}>
            Contact with our support team, choose your car and make an easy payment
          </Typography>
        </Box>
        {!isTablet && (
          <Box mt={"30px"}>
            <img src={ArrowTwoIcon} alt="arrow" />
          </Box>
        )}
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"16px"} width={"304px"}>
          <img src={CarIcon} alt="car" />
          <Typography fontSize={"18px"} fontWeight={500} maxWidth={"304px"} textAlign={"center"}>
            Travel with pleasure!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StepsSection;