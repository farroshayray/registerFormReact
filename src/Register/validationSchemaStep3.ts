// validationSchemaStep3.ts
import * as Yup from "yup";

export const validationSchemaStep3 = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .matches(
      /^[a-z0-9]{6,}$/,
      "Username must be at least 6 characters, lowercase, and contain only letters and numbers without spacing"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{6,}$/,
      "Password must be at least 6 characters, contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
    ),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Re-Enter Password is required"),
});
