import React, { useState } from "react";
import { Box, Button, CircularProgress, InputLabel, TextField, Typography } from "@mui/material";
import style from "./FromSection.module.css";
import LocationPopover from "./LocationPopover/LocationPopover";
import DataInput from "./DataInput/DataInput";
import { useFormik } from "formik";
import moment from "moment";
import { FormSchema } from "./validationSchema";
import { useResponsive } from "../../hooks/useResponsive";
import { IForm, sendEmailRequest } from "../../api/api";
import SendModal from "../Shared/Modal/SendModal";


const FormSection = () => {
  const { isMobile } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean | null>(null);

  const handleCloseModal = () => {
    setOpen(false);
    setIsData(null);
  };

  const submitForm = async (value: IForm) => {

    const formData = {
      locationUp: value.locationUp,
      fromDate: moment(new Date(value?.fromDate)).format("YYYY-MM-DD"),
      locationOff: value.locationOff,
      toDate: moment(new Date(value?.toDate)).format("YYYY-MM-DD"),
      age: value.age,
      phone: value.phone,
      name: value.name,
    };

    try {
      setLoading(true);
      const res = await sendEmailRequest(formData);
      if (res) {
        setOpen(true);
        setIsData(true);
        formik.resetForm();
      }
    } catch (e) {
      console.log(e);
      setOpen(true);
      setIsData(false);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      locationUp: null,
      fromDate: "",
      locationOff: null,
      toDate: "",
      age: "",
      phone: "",
      name: "",
    },
    validationSchema: FormSchema,
    onSubmit: submitForm,
  });

  const setFormatValue = (v: any) => {
    if (v.target.value && !v.target.value.includes("+")) v.target.value = "+" + v.target.value;
    formik.setFieldValue("phone", v.target.value);
  };

  return (
    <Box>
      <Box className={style.formContainer} mt={isMobile ? "110px" : "140px"}>
        <Typography component={"h2"} fontWeight={500} fontSize={isMobile ? "20px" : "24px"} mb={"5px"}
                    textAlign={isMobile ? "center" : "left"}>
          <span style={{ color: "#FD790D" }}>BOOK</span> YOUR NEXT LONG DRIVE NOW!
        </Typography>
        <Typography fontSize={isMobile ? "14px" : "16px"} color={"#6A6A6A"} textAlign={isMobile ? "center" : "left"}>
          Leave a request and our manager will contact you immediately!
        </Typography>
        <Box component={"form"} onSubmit={formik.handleSubmit} display={"flex"}
             justifyContent={isMobile ? "center" : "space-between"}
             flexWrap={"wrap"} mt={"24px"}>
          <Box mb={"20px"} flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>Pick-up location</InputLabel>
            <LocationPopover
              formik={formik}
              value={formik.values.locationUp}
              handleChange={(e: any) => formik.setFieldValue("locationUp", e)}
                />
          </Box>
          <Box flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>Pick-up date</InputLabel>
            <DataInput
              min={new Date()}
              value={formik.values.fromDate}
              onChange={(e) => formik.setFieldValue("fromDate", e)}
              dateFormat={"MMM d yyyy"}
              placeholder={"mm/dd/yyyy"}
              error={Boolean(formik.errors.fromDate && formik.touched.fromDate)}
              helperText={formik.touched.fromDate && formik.errors.fromDate ? formik.touched.fromDate && formik.errors.fromDate : " "}
            />
          </Box>
          <Box mb={"20px"} flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>Drop-off location</InputLabel>
            <LocationPopover
              formik={formik}
              value={formik.values.locationOff}
              handleChange={(e: any) => formik.setFieldValue("locationOff", e)}
            />
          </Box>
          <Box flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>Return date</InputLabel>
            <DataInput
              value={formik.values.toDate}
              onChange={(e) => formik.setFieldValue("toDate", e)}
              dateFormat={"MMM d yyyy"}
              placeholder={"mm/dd/yyyy"}
              disabled={!formik.values.fromDate}
              min={formik.values.fromDate}
              error={Boolean(formik.errors.toDate && formik.touched.toDate)}
              helperText={formik.touched.toDate && formik.errors.toDate ? formik.touched.toDate && formik.errors.toDate : " "}
            />
          </Box>
          <Box flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>Age</InputLabel>
            <TextField
              sx={!isMobile ? { width: "260px" } : { width: "100%" }}
              id="age"
              name="age"
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder={"Age"}
              value={formik.values.age}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.age && formik.touched.age)}
              helperText={formik.touched.age && formik.errors.age ? formik.touched.age && formik.errors.age : " "}
            />
          </Box>
          <Box flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>WhatsApp phone number</InputLabel>
            <TextField
              sx={!isMobile ? { width: "260px" } : { width: "100%" }}
              id="phone"
              name="phone"
              type="text"
              placeholder={"+"}
              value={formik.values.phone.trim()}
              onChange={setFormatValue}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              error={Boolean(formik.errors.phone && formik.touched.phone)}
              helperText={formik.touched.phone && formik.errors.phone ? formik.touched.phone && formik.errors.phone : " "}
            />
          </Box>
          <Box flexBasis={isMobile ? "100%" : ""}>
            <InputLabel className={style.formLabel}>Telegram username (optional)</InputLabel>
            <TextField
              sx={!isMobile ? { width: "260px" } : { width: "100%" }}
              id="name"
              name="name"
              type="text"
              placeholder={"Username"}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.name && formik.touched.name)}
              helperText={formik.touched.name && formik.errors.name ? formik.touched.name && formik.errors.name : " "}
            />
          </Box>
          <Box mt={isMobile ? "24px" : ""} flexBasis={isMobile ? "100%" : ""} display={"flex"}
               alignItems={isMobile ? "flex-end" : "center"}>
            <Button
              sx={!isMobile ? { width: "260px", height: "48px" } : { width: "100%", height: "48px" }}
              variant={"contained"}
              type={"submit"}
            >
              {!loading ? "Go to live chat!" : <CircularProgress size={30} style={{ color: "#fff" }} />}
            </Button>
          </Box>
        </Box>
      </Box>
      <SendModal open={open} res={isData} handleClose={handleCloseModal} />
    </Box>
  );
};

export default FormSection;