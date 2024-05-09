import { useFormik } from "formik";
import React, { useState } from "react";
import { initialSchema, initialValues } from "../../validations";

const errorStyle = {
  color: "red",
  fontSize: "small",
  fontWeight: "400",
  marginTop: "3px",
  marginBottom: "3px",
};

function KYC() {
  const [showCompany, setShowCompany] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  //handle the companyinfo clicked
  const companyInfo = () => {
    setShowCompany(true);
    setShowAccount(false);
  };

  //handle the accountInfo clicked
  const accountInfo = () => {
    setShowAccount(true);
    setShowCompany(false);
  };
  
  //handle the KycDetails clicked
  const KycDetails = () => {
    setShowCompany(false);
    setShowAccount(false);
  };

  //Kyc form submit
  const {
    values: kycValues,
    errors: kycErrors,
    touched: kycTouched,
    handleBlur: kycHandleBlur,
    handleChange: kycHandleChange,
    handleSubmit: kycHandleSubmit,
    resetForm: kycResetForm,
  } = useFormik({
    initialValues: initialValues.kyc,
    validationSchema: initialSchema.kyc,
    onSubmit: async (values) => {
      const data = {};
      console.log(values);
      kycResetForm();
    },
  });


  //Comapny Info form submit
  const {
    values: companyValues,
    errors: companyErrors,
    touched: companyTouched,
    handleBlur: companyHandleBlur,
    handleChange: companyHandleChange,
    handleSubmit: companyHandleSubmit,
    resetForm: companyResetForm,
  } = useFormik({
    initialValues: initialValues.company,
    validationSchema: initialSchema.company,
    onSubmit: async (values) => {
      const data = {};
      console.log(values);
      companyResetForm();
    },
  });

// Account form submit
  const {
    values: accountValues,
    errors: accountErrors,
    touched: accountTouched,
    handleBlur: accountHandleBlur,
    handleChange: accountHandleChange,
    handleSubmit: accountHandleSubmit,
    resetForm: accountResetForm,
  } = useFormik({
    initialValues: initialValues.account,
    validationSchema: initialSchema.account,
    onSubmit: async (values) => {
      const data = {

      };
      console.log(values);
      accountResetForm();
    },
  });

  return (
    <div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ flex: 1 }}>
          <button className="btn btn-info" onClick={KycDetails}>
            KYC Details
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <button className="btn btn-success" onClick={companyInfo}>
            Company Info
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <button className="btn btn-secondary" onClick={accountInfo}>
            Account Details
          </button>
        </div>
      </div>

      {/* hide the form when click on company Info and Account Details*/}
      {!showCompany && !showAccount && (
        <form style={{ margin: "20px" }} onSubmit={kycHandleSubmit}>
          <div class="row">
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="companyName" class="text-black">
                  Company Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="companyName"
                  placeholder="Enter your name"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.companyName}
                />
                {kycTouched.companyName && kycErrors.companyName && (
                  <p style={errorStyle}>{kycErrors.companyName}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="email" class="text-black">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.email}
                />
                {kycTouched.email && kycTouched.email && (
                  <p style={errorStyle}>{kycErrors.email}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="companyAddress" class="text-black">
                  Company Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="companyAddress"
                  placeholder="Enter your Company Address"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.companyAddress}
                />
                {kycTouched.companyAddress && kycErrors.companyAddress && (
                  <p style={errorStyle}>{kycErrors.companyAddress}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="panNumber" class="text-black">
                  Pan Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="panNumber"
                  placeholder="Enter your Pan Number"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.panNumber}
                />
                {kycTouched.panNumber && kycErrors.panNumber && (
                  <p style={errorStyle}>{kycErrors.panNumber}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="pinCode" class="text-black">
                  Pin Code
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="pinCode"
                  placeholder="Enter your Pin Code"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.pinCode}
                />
                {kycTouched.pinCode && kycErrors.pinCode && (
                  <p style={errorStyle}>{kycErrors.pinCode}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="gstNumber" class="text-black">
                  GST Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="gstNumber"
                  placeholder="Enter your GST Number"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.gstNumber}
                />
                {kycTouched.gstNumber && kycErrors.gstNumber && (
                  <p style={errorStyle}>{kycErrors.gstNumber}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="mobileNo" class="text-black">
                  Mobile Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="mobileNo"
                  placeholder="Enter your Mobile Number"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.mobileNo}
                />
                {kycTouched.mobileNo && kycErrors.mobileNo && (
                  <p style={errorStyle}>{kycErrors.mobileNo}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="city" class="text-black">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="Enter your City"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.city}
                />
                {kycTouched.city && kycErrors.city && (
                  <p style={errorStyle}>{kycErrors.city}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="uploadCompany" class="text-black">
                  Upload Company
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="uploadCompany"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.uploadCompany}
                />
                {kycTouched.uploadCompany && kycErrors.uploadCompany && (
                  <p style={errorStyle}>{kycErrors.uploadCompany}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="landlineNumber" class="text-black">
                  Landline Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="landlineNumber"
                  placeholder="Enter your Landline Number"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.landlineNumber}
                />
                {kycTouched.landlineNumber && kycTouched.landlineNumber && (
                  <p style={errorStyle}>{kycTouched.landlineNumber}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="state" class="text-black">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="state"
                  placeholder="Enter your State"
                  onChange={kycHandleChange}
                  onBlur={kycHandleBlur}
                  value={kycValues.state}
                />
                {kycTouched.state && kycErrors.state && (
                  <p style={errorStyle}>{kycErrors.state}</p>
                )}
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="uploadGST" class="text-black">
                  Upload GST
                </label>
                <input type="file" class="form-control" id="uploadGST" />
              </div>
            </div>
          </div>
          <div style={{ display: "inline-flex" }}>
            <div class="form-group">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      )}

      {/*  Show the form when Company Info is clicked */}
      {showCompany && (
        <form onSubmit={companyHandleSubmit}>
          <div class="row">
            <div class="col-md-4">
              <div className="form-group">
                <label for="companyType" class="text-black">
                  Company Type
                </label>
                <select class="form-control" id="companyType">
                  <option value="">Select Company Type</option>
                  <option value="Public Limited Company">
                    Public Limited Company
                  </option>
                  <option value="Limited Liability Company">
                    Limited Liability Company
                  </option>
                  <option value="Partnership">Partnership</option>
                  <option value="Sole Proprietorship">
                    Sole Proprietorship
                  </option>
                </select>
              
                {companyTouched.companyType && companyErrors.companyType && (
                  <p style={errorStyle}>{companyErrors.companyType}</p>
                )}
              </div>

              <div class="form-group">
                <label for="panNumber" className="text-black">
                  Company Pan Card Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="panNumber"
                  placeholder="Enter PAN Card Number"
                  onChange={companyHandleChange}
                  onBlur={companyHandleBlur}
                  value={companyValues.panNumber}
                />
                {companyTouched.panNumber && companyErrors.panNumber && (
                  <p style={errorStyle}>{companyErrors.panNumber}</p>
                )}
              </div>
              <div class="form-group">
                <label for="panCardName" className="text-black">
                  Name on Pan card
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="panCardName"
                  placeholder="Enter your Name on PAN Card"
                  onChange={companyHandleChange}
                  onBlur={companyHandleBlur}
                  value={companyValues.panCardName}
                />
                {companyTouched.panCardName && companyErrors.panCardName && (
                  <p style={errorStyle}>{companyErrors.panCardName}</p>
                )}
              </div>
              <div class="form-group">
                <label for="uploadPan" className="text-black">
                  Upload Pan Card
                </label>
                <input type="file" class="form-control" id="uploadPan" 
                />
                {companyTouched.uploadPan && companyErrors.uploadPan && (
                  <p style={errorStyle}>{companyErrors.uploadPan}</p>
                )}
              </div>
              <div class="form-group">
                <label for="coiNumber" className="text-black">
                  Enter COI Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="coiNumber"
                  placeholder="Enter your Name on PAN Card"
                  onChange={companyHandleChange}
                  onBlur={companyHandleBlur}
                  value={companyValues.coiNumber}
                />
                {companyTouched.coiNumber && companyErrors.coiNumber && (
                  <p style={errorStyle}>{companyErrors.coiNumber}</p>
                )}
              </div>
            </div>

            <div class="col-md-6 offset-md-1">
              <h1 className="text-success">Document Type Details</h1>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="documentType">Document Type*</label>
                  <select
                    name="documentType"
                    id="documentType"
                    class="form-control"
                  >
                    <option value="">Select Appropriate Document</option>
                    <option value="electricityBill">Electricity Bill</option>
                    <option value="leaseAgreement">
                      Lease / Rent agreement
                    </option>
                    <option value="telephoneBill">
                      Telephone/Broadband Bill
                    </option>
                    <option value="certificateOfIncorporation">
                      Certificate of Incorporation (COI)
                    </option>
                  </select>
              
                {companyTouched.companyType && companyErrors.companyType && (
                  <p style={errorStyle}>{companyErrors.companyType}</p>
                )}
                </div>
              </div>
              <div className="offset-md-6">
                <div class="form-group" style={{ marginBottom: "15px" }}>
                  <label for="docID" className="text-black">
                    Document ID
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="docID"
                    placeholder="Enter your Document Id"
                    onChange={companyHandleChange}
                    onBlur={companyHandleBlur}
                    value={companyValues.docId}
                  />
                  {companyTouched.docId && companyErrors.docId && (
                    <p style={errorStyle}>{companyErrors.docId}</p>
                  )}
                </div>
                <div class="form-group" style={{ marginBottom: "15px" }}>
                  <label for="docName" className="text-black">
                    Name on Document
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="docName"
                    placeholder="Enter your Name on Document"
                    onChange={companyHandleChange}
                    onBlur={companyHandleBlur}
                    value={companyValues.docName}
                  />
                  {companyTouched.docName && companyErrors.docName && (
                    <p style={errorStyle}>{companyErrors.docName}</p>
                  )}
                </div>
                <div class="form-group" style={{ marginBottom: "15px" }}>
                  <label for="panCardImage">Upload Document Image*</label>
                  <input
                    type="file"
                    id="panCardImage"
                    class="form-control"
                    accept=".png, .jpg, .jpeg"
           
                  />
                  {companyTouched.panCardImage && companyErrors.panCardImage && (
                    <p style={errorStyle}>{companyErrors.panCardImage}</p>
                  )}
                </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ marginBottom: "15px" }}
                >
                  Save Changes
                </button>
              </div>
            </div>

            <div class="col-md-4">
              <label for="coiFile">Upload COI image</label>
              <input type="file" class="form-control"
               id="coiFile" 
             />
             {companyTouched.coiFile && companyErrors.coiFile && (
               <p style={errorStyle}>{companyErrors.coiFile}</p>
             )}
            </div>
          </div>
        </form>
      )}

      {/* show the Account Details */}
      {showAccount && (
        <form style={{ margin: "20px" }} onSubmit={accountHandleSubmit}>
          <div class="row">
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="accountName" class="text-black">
                  Account Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="accountName"
                  placeholder="Enter your Account Name"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                  value={accountValues.accountName}
                />
                {accountTouched.accountName && accountErrors.accountName && (
                  <p style={errorStyle}>{accountErrors.accountName}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="ifscCode" class="text-black">
                  IFSC Code *
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="ifscCode"
                  placeholder="Enter your IFSC Code"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                  value={accountValues.ifscCode}
                />
                {accountTouched.ifscCode && accountErrors.ifscCode && (
                  <p style={errorStyle}>{accountErrors.ifscCode}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="uploadCheque" class="text-black">
                  Upload Cancelled Cheque *
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="uploadCheque"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                />
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="bankName" class="text-black">
                  Bank Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="bankName"
                  placeholder="Enter your Bank Name"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                  value={accountValues.bankName}
                />
                {accountTouched.bankName && accountErrors.bankName && (
                  <p style={errorStyle}>{accountErrors.bankName}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div className="form-group">
                <label for="accountType" class="text-black">
                  Select Account Type
                </label>
                <select
                  class="form-control"
                  id="accountType"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                  value={accountValues.accountType}
                >
                  <option value="">Select Account Type</option>
                  <option value="Saving Account">Saving Account</option>
                  <option value="Current Account">Current Account</option>
                </select>
                {accountTouched.accountType && accountErrors.accountType && (
                  <p style={errorStyle}>{accountErrors.accountType}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}></div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="accountNumber" class="text-black">
                  Account Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="accountNumber"
                  placeholder="Enter your Account Number"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                  value={accountValues.accountNumber}
                />
                {accountTouched.accountNumber && accountErrors.accountNumber && (
                  <p style={errorStyle}>{accountErrors.accountNumber}</p>
                )}
              </div>
            </div>
            <div class="col-md-8" style={{ marginBottom: "20px" }}></div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <div class="form-group">
                <label for="bankBranch" class="text-black">
                  Bank Branch*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="bankBranch"
                  placeholder="Enter your Bank Branch Name"
                  onChange={accountHandleChange}
                  onBlur={accountHandleBlur}
                  value={accountValues.bankBranch}
                />
                {accountTouched.bankBranch && accountErrors.bankBranch && (
                  <p style={errorStyle}>{accountErrors.bankBranch}</p>
                )}
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}></div>
            <div class="col-md-4" style={{ marginBottom: "20px" }}>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default KYC;
