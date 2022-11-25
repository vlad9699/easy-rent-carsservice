import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import SmileIcon from '../../../assets/smile-icon.svg'
import SadIcon from '../../../assets/sad-icon.svg'

type SendModalProps = {
  open: boolean,
  res: boolean | null,
  handleClose: any
}

const SendModal = ({ open, res, handleClose }: SendModalProps) => {
  const whichSmile = res ? SmileIcon : SadIcon

  const renderModalInfo = () => {
    let renderText;
    if (res) {
      renderText = "Thank you, we will contact you shortly!";
    } else {
      renderText = "Something is wrong, please try again later...";
    }

    return (
      <>
        <img src={whichSmile} alt={"smile"} />
        <Typography fontSize={"24px"} fontWeight={500}>
          {renderText}
        </Typography>
      </>
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition={true}
    >
      <Box sx={style.mainBox}>
        <Box sx={style.littleBox}>
          {renderModalInfo()}
        </Box>
      </Box>
    </Modal>
  );
};

const style = {
  mainBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "384px",
    maxHeight: "200px",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "#fff",
    outline: "none",
    borderRadius: "20px",
    padding: "23px 17px 30px 17px",
  },
  littleBox: {
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
};

export default SendModal;