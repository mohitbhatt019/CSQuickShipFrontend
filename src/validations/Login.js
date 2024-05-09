import * as Yup from "yup";

// initial values for the Login form
const loginInitialValues = {
  email: "",
  password: "",
};

// Validations for the Login Form
const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address *")
    .email("Invalid email address *")
    .required("User email is required *"),
  password: Yup.string()
    .trim()
    .min(4, "Password must be at least 4 characters long.")
    .required("Password required *"),
});

export { loginInitialValues, loginValidationSchema };
