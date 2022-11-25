import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { components, DropdownIndicatorProps } from "react-select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationIcon from "../../../assets/location-icon.svg";
import { useResponsive } from "../../../hooks/useResponsive";

type LocationProps = {
  formik?: any,
  value?: any,
  handleChange?: any

}

const LocationPopover = ({ formik, value, handleChange  }: LocationProps) => {
  const { isMobile } = useResponsive();

  const DropdownIndicator = (
    props: DropdownIndicatorProps,
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDropDownIcon />
      </components.DropdownIndicator>
    );
  };

  const Menu = (PropsWithChildren: any) => {
    if (PropsWithChildren?.selectProps?.inputValue?.length === 0) return null;

    return (
      <>
        <components.Menu {...PropsWithChildren} />
      </>
    );
  };

  const Control = (props: any) => {
    return (
      <components.Control {...props}>
        <img src={LocationIcon} alt={"location"} />
        {props.children}
      </components.Control>
    );
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          placeholder: "Enter your address",
          autoFocus: false,
          openMenuOnClick: false,
          components: { DropdownIndicator, Menu, Control },
          onChange: handleChange,
          isClearable: true,
          value: value,
          styles: {
            input: (provided: any) => ({
              ...provided,
              color: "#242424",
              fontSize: 16,
              fontWeight: 400,
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              color: "black",
              backgroundColor: state.isFocused ? "rgba(0, 0, 0, 0.1)" : "#fff",
              fontSize: 14,
              fontWeight: 700,
            }),
            singleValue: (provided: any) => ({
              ...provided,
              color: "black",
              fontSize: 14,
              fontWeight: 700,
            }),
            control: (base: any, state: any) => ({
              ...base,
              paddingLeft: 17,
              width: !isMobile ? 260 : "100%",
              height: 48,
              backgroundColor: "#fff",
              borderRadius: "4px",
              fontSize: 16,
              fontWeight: 400,
              cursor: "pointer",
              border: ((formik.touched.locationUp && formik.errors.location) || (formik.touched.locationOff && formik.errors.locationOff)) ? "1px  solid #E9757E" : state.isFocused ? "1px  solid rgba(102, 112, 128, 80%)" : "1px  solid #B6B6B6",
              boxShadow: state.isFocused ? "1px  solid rgba(0, 0, 0, 0.1)" : "1px  solid rgba(0, 0, 0, 0.1)",
              "&:hover": {
                border: ((formik.touched.locationUp && formik.errors.location) || (formik.touched.locationOff && formik.errors.locationOff)) ? "1px  solid #E9757E" : state.isFocused ? "1px  solid rgba(102, 112, 128, 80%)" : "1px  solid rgba(102, 112, 128, 80%)",
                boxShadow: state.isFocused ? "1px  solid rgba(0, 0, 0, 0.1)" : "1px  solid rgba(0, 0, 0, 0.1)",
              },
            }),
            indicatorSeparator: (provided: any) => ({
              ...provided,
              backgroundColor: "transparent",
            }),
            container: (provided: any) => ({
              ...provided,
              width: !isMobile ? 260 : "100%",
              height: 48,
              color: "#242424",
            }),
            placeholder: (provided: any) => ({
              ...provided,
              fontSize: 16,
              fontWeight: 400,
              color: "#B6B6B6",
            }),
            dropdownIndicator: (provided: any) => ({
              ...provided,
              display: "none",
            }),
            menu: (provided: any) => ({
              ...provided,
              borderRadius: 3,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }),
          },
        }}
        apiKey={"AIzaSyAfzOk3Wev_Q8IQ0deNq5xWffnEyx-HTA0"}
        apiOptions={{ language: "en" }}
        autocompletionRequest={{
          types: ["(cities)"],
        }}
      />
    </div>
  );
};

export default LocationPopover;