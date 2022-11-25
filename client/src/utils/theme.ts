import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
  typography: {
    "fontFamily": "'Montserrat', sans-serif",
    allVariants: {
      color: "#242424",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    primary: {
      main: "#FD790D",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "back" },
          style: {
            border: "2px solid #667080",
            color: "#667080",
          },
        } as any,
      ],
    },
    MuiFormControl: {
      variants: [
        {
          props: { variant: "standard" },
          style: {
            color: "#B6B6B6",
            "& label.Mui-focused": { // Label Focus Text
              color: "#ffffff",
            },
            "& .Mui-error label": {
              color: "#E9757E!important",
              borderColor: "#E9757E!important",
            },
            "& input::placeholder": {
              color: "#B6B6B6",
              opacity: 1,
            },
            "& .MuiInputLabel-root": {
              color: "#ffffff",
            },
            "& .MuiInput-underline:after": { // ...
              // borderBottomColor: 'pink',
              color: "#ffffff",
            },
            "& .MuiInput-underline:before": { // ...
              // borderBottomColor: 'pink',
              color: "#ffffff",
            },
            "& .MuiInputBase-root": { // Border
              color: "#ffffff",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 20%)",
                borderRadius: 10,
              },
              "&:hover fieldset": { // ...
                borderColor: "rgba(255, 255, 255, 40%)",
              },
              "&.Mui-focused fieldset": { // Border Focus
                borderColor: "rgba(255, 255, 255, 20%)",
              },
              "&.Mui-disabled fieldset": {
                borderColor: "rgba(0,0,0,0.22)",
              },
              "&.Mui-error fieldset": {
                borderColor: "#E9757E!important",
              },
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: "#ffffff",
            // width: "100%",
            // maxWidth: '260px',
            // opacity: 0.6,
            "& label.Mui-focused": { // Label Focus Text
              color: "#000000",
            },
            "& .Mui-error label": {
              color: "#E9757E!important",
              borderColor: "#E9757E!important",
            },
            "& input": {
              color: "#242424",
              paddingLeft: 16,
              paddingTop: 12,
              paddingBottom: 12,
            },
            "& input::placeholder": {
              color: "#B6B6B6",
            },
            "& .MuiInputLabel-root": {
              color: "#B6B6B6",
            },
            "& .MuiInput-underline:after": { // ...
              // borderBottomColor: 'pink',
              color: "#000000",
            },
            "& .MuiInput-underline:before": { // ...
              // borderBottomColor: 'pink',
              color: "#000000",
            },
            "& .MuiInputBase-root": { // Border
              color: "#B6B6B6",
              "& fieldset": {
                borderColor: "#B6B6B6",
                borderRadius: 4,
              },
              "&:hover fieldset": { // ...
                borderColor: "rgba(102, 112, 128, 80%)",
              },
              "&.Mui-focused fieldset": { // Border Focus
                borderColor: "rgba(102, 112, 128, 80%)",
              },
              "&.Mui-error fieldset": {
                borderColor: "#E9757E!important",
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {},
        focused: {},
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&.Mui-error": {
            color: "#E9757E",
          },
        },
        error: {
          color: "green!important",
        },
      },
    },
  },

});