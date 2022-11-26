import React from "react";
import { Box, Typography } from "@mui/material";
import style from "./DifferentSection.module.css";
import DollarIcon from "../../assets/dollar-icon.svg";
import ServiceIcon from "../../assets/service-icon.svg";
import HoursIcon from "../../assets/24-icon.svg";
import { useResponsive } from "../../hooks/useResponsive";

const DifferentSection = () => {
  const { isMobile } = useResponsive();

  return (
    <Box component={"section"} my={isMobile ? "80px" : "104px"}>
      <Typography fontSize={isMobile ? "24px" : "32px"} fontWeight={700} textAlign={"center"} mb={"16px"}>
        WHY WE ARE DIFFERENT
      </Typography>
      <Typography fontSize={"16px"} color={"#6A6A6A"} textAlign={"center"} mb={"60px"}>
        Three main advantages that make us the best in the car rental market
      </Typography>
      <Box className={style.box}>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"16px"} bgcolor={"#F9F9F8"}
             borderRadius={"20px"} p={"32px 23px"} width={"316px"}>
          <img style={{ marginBottom: "10px" }} src={DollarIcon} alt="dollar" />
          <Typography fontSize={"18px"} fontWeight={500} textAlign={"center"}>
            BEST PRICE
          </Typography>
          <Typography fontSize={"16px"} fontWeight={500} maxWidth={"270px"} textAlign={"center"} color={"#6A6A6A"}>
            We provide -30% off the rental price
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"16px"} bgcolor={"#F9F9F8"}
             borderRadius={"20px"} p={"32px 23px"} width={"316px"}>
          <img style={{ marginBottom: "10px" }} src={HoursIcon} alt="24 hours" />
          <Typography fontSize={"18px"} fontWeight={500} textAlign={"center"}>
            ASSISTANCE
          </Typography>
          <Typography fontSize={"16px"} fontWeight={500} maxWidth={"270px"} textAlign={"center"} color={"#6A6A6A"}>
            Support 24/7
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"16px"} bgcolor={"#F9F9F8"}
             borderRadius={"20px"} p={"32px 23px"} width={"316px"}>
          <img style={{ marginBottom: "10px" }} src={ServiceIcon} alt="service" />
          <Typography fontSize={"18px"} fontWeight={500} textAlign={"center"}>
            ALL CARS ARE IN GREAT CONDITION
          </Typography>
          <Typography fontSize={"16px"} fontWeight={500} maxWidth={"270px"} textAlign={"center"} color={"#6A6A6A"}>
            Our cars are regularly serviced and maintained
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default DifferentSection;