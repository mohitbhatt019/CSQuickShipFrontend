import { loginInitialValues,loginValidationSchema } from "./Login";
import { signUpValidationSchema, signUpinitialValues } from "./Signup";
import { accountDetailsValidations, accountDetailsValues, companyInfoValidations, companyInfoValues, kycValidationSchema, kycinitialValues } from "./kyc";


// import all the InitialValues for the components
const initialValues={
    login: loginInitialValues,
    signUp:signUpinitialValues,
    kyc:kycinitialValues,
    account:accountDetailsValues,
    company:companyInfoValues
}

//import the ValidationSchema for the components
const initialSchema = {
    login: loginValidationSchema,
    signUp:signUpValidationSchema,
    kyc:kycValidationSchema,
    account:accountDetailsValidations,
    company:companyInfoValidations
}
export { initialValues, initialSchema };