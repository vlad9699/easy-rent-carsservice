import * as yup from "yup";

export const FormSchema = () => {
  return yup.object({
    locationUp: yup.object().required(),
    fromDate: yup.date()
      .nullable()
      .required("Pick-up date is a required"),
    locationOff: yup.object().required(),
    toDate: yup.string()
      .nullable()
      .required("Return date is a required"),
    age: yup
      .number()
      .nullable()
      .min(18, "Age must be greater or 18")
      .max(100, "Really?")
      .required(" "),
    phone: yup.string()
      .nullable()
      .min(10, "Number must be greater 10 symbols")
      .required("Number is a required"),
    name: yup.string()
      .max(20, "Username must be max 20 symbols"),
  });
};