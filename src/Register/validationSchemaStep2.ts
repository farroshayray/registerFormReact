// validationSchemaStep2.ts
import * as Yup from "yup";

export const validationSchemaStep2 = Yup.object({
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "Zip Code must be 5 digits")
    .required("Zip Code is required"),
});
