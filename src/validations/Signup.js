import * as Yup from "yup";

// initial values for the SignUp form
const signUpinitialValues = {
  name: "",
  email: "",
  contactNo: "",
  companyName: "",
  password: "",
  agreeTerms: false,
};

// Validations for the SignUp Form
const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address *")
    .email("Invalid email address *")
    .required("User email is required *"),
  password: Yup.string()
    .trim()
    .min(4, "Password must be at least 4 characters long.")
    .required("Password required *"),
  contactNo: Yup.string()
    .required("Contact No. is required")
    .max(10, "Contact No. must be 10 characters or less"),
  companyName: Yup.string().required("Company Name is required"),
  agreeTerms: Yup.boolean().oneOf([true], "You must agree to the terms"),
});

export { signUpinitialValues, signUpValidationSchema };
