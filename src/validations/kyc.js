import * as Yup from "yup";

// initial values for the KYC form
const kycinitialValues = {
  companyName: "",
  email: "",
  companyAddress: "",
  panNumber: "",
  pinCode: "",
  gstNumber: "",
  mobileNo: "",
  city: "",
  uploadCompany: "",
  landlineNumber: "",
  state: "",
  uploadGst: "",
};

// validations for the KYC form
const kycValidationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company Name is required *"),
  email: Yup.string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address *")
    .email("Invalid email address *")
    .required("User email is required *"),
  companyAddress: Yup.string().required("Company Address is required *"),
  panNumber: Yup.string().required("Pan Number is required *"),
  pinCode: Yup.string().required("Pin Code is required *"),
  gstNumber: Yup.string().required("GST Number is required *"),
  mobileNo: Yup.string()
    .required("Mobile No. is required *")
    .max(10, "Mobile No. must be 10 characters or less"),
  city: Yup.string().required("City Name is required *"),
  landlineNumber: Yup.string()
    .required("Landline No. is required *")
    .max(10, "Landline No. must be 10 characters or less"),
  state: Yup.string().required("State Name is required *"),
});

//initialize values for accountdetails
const accountDetailsValues={
  accountName:"",
  ifscCode:"",
  bankName:"",
  accountNumber:"",
  bankBranch:"",
  accountType:""
}

// validations for the Account form
const accountDetailsValidations=Yup.object().shape({
  accountName: Yup.string().required("Account Name is required *"),
  ifscCode: Yup.string().required("IFSC Code is required *"),
  bankName: Yup.string().required("Bank Name is required *"),
  accountType: Yup.string().required("Account Type is required *"),
  accountNumber: Yup.string().required("Account Number is required *"),
  bankBranch: Yup.string().required("Bank Branch Name is required *"),
})




//initialize values for accountdetails
const companyInfoValues={
  documentType:"",
  panNumber:"",
 panCardName:"",
 uploadPan:"",
 coiNumber:"",
  companyType:"",
  docId:"",
  docName:"",
  panCardImage:"",
  coiFile:""
}

// validations for the Account form
const companyInfoValidations=Yup.object().shape({
  documentType: Yup.string().required("Document Type Name is required *"),
  panNumber: Yup.string().required("Pan Number is required *"),
  panCardName: Yup.string().required("Name on Pan Card is required *"),
  companyType: Yup.string().required("Company Type is required *"),
  uploadPan: Yup.string().required("Uplaod Pan card File is required *"),
  coiNumber: Yup.string().required("COI Number is required *"),
  docId: Yup.string().required("Document Id is required *"),
  docName: Yup.string().required("Document Name is required *"),
  panCardImage: Yup.string().required("Pan Card Image is required *"),
  coiFile: Yup.string().required("COI File is required *"),

})

export { kycinitialValues, kycValidationSchema,
  accountDetailsValues,accountDetailsValidations,
companyInfoValues,companyInfoValidations
};
