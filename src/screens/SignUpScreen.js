import React, { useState } from "react";
import { useFormik } from "formik"; // Import the useFormik hook
import { initialSchema, initialValues } from "../validations";
import ImagesUrl from "../constants/images";
import { toast } from "react-toastify";
import usePost from "../hooks/usePost";
import ENDPOINTS from "../services/endPoints";
import QUERY_KEYS from "../services/queryKeys";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../routes/RoutePath";
export default function SignUpScreen() {

  const [PasswordHide, setPasswordHide] = useState(true);
  const nav = useNavigate();

  // Define reusable style for error messages
  const errorStyle = {
    color: "red",
    fontSize: "small",
    fontWeight: "400",
    marginTop: "3px",
    marginBottom: "3px",
  };

  const {
    mutateAsync: adminLoginMutateAsync,
    isLoading: isLoadingAdminLogin,
    error: errorAdminLogin,
  } = usePost(ENDPOINTS.REGISTER, QUERY_KEYS.ADMIN_LOGIN_QUERY_KEY);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues.signUp,
    validationSchema: initialSchema.signUp,
    onSubmit: async (values) => {
      const data = {
        name: values.name,
        email: values.email,
        contactNo: values.contactNo,
        companyName: values.companyName,
        password: values.password,
        agreeTerms: values.agreeTerms,
      };
      console.log(data);
        try {
          debugger
          const response = await adminLoginMutateAsync(data);
          if (response) {
            toast.success("User Registered Sucessfully");
            resetForm();
            nav(RoutePath.LOGIN.path)

          }
        } catch (error) {
          toast.error("User Not Registered Sucessfully!!!");
        }
    },
  });
  return (
    <section
    class="cs-template-animation cs_login loaded"
      style={{ backgroundImage: ImagesUrl.loginbg }}
    >
      <div class="cs-shape">
      <div class="cs-transformX-L-50 cs-transition-delay-3 login-shape-img">
          <img src={ImagesUrl.shape1} alt="Shape" />
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="leftBox_layout">
                    <div class="cs-column-wrap justify-content-center">
                        <div class="cs-transformX-L-50 cs-transition-delay-3 login-left-img">
                        <img src={ImagesUrl.login1} alt="Animated Image" />
                        </div>
                    </div>
                </div>
                <div class="rightBox_layout">
                    <div class="cs-column-wrap justify-content-center">
                        <div class="cs-transformX-L-50 cs-transition-delay-3">
                            <a href="/login" class="cs-logo action-link"><img src={ImagesUrl.logopng} alt="Logo" /></a>
                        </div>
                        <div class="cs-transformX-L-50 cs-transition-delay-3">
                            <div class="cs-middle-content">
                                <h1 class="cs-main-title">Sign Up to Cs QuickShip</h1>
                                <div class="cs-switcher-description1">If you already have an account, You can<a
                                        href="/login" class="cs-switcher-text action-link ms-2">Sign In</a></div>
                            </div>
                        </div>
                        <div class="cs-form">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {touched.name && errors.name && (
                      <p style={errorStyle}>{errors.name}</p>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      name="email"
                      placeholder="E-mail Address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <p style={errorStyle}>{errors.email}</p>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="tel"
                      id="contactNo"
                      class="form-control"
                      name="contactNo"
                      placeholder="phone Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contactNo}
                    />
                    {touched.contactNo && errors.contactNo && (
                      <p style={errorStyle}>{errors.contactNo}</p>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="********"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <i
                      toggle="#password"
                      class="fa fa-fw fa-eye toggle-password field-icon"
                    ></i>
                    {touched.password && errors.password && (
                      <p style={errorStyle}>{errors.password}</p>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="companyName"
                      placeholder="Company Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyName}
                    />
                    {touched.companyName && errors.companyName && (
                      <p style={errorStyle}>{errors.companyName}</p>
                    )}
                  </div>
                  <div class="form-group">
                    <div class="cs-checkbox-box">
                      <input
                        id="agreeTerms"
                        type="checkbox"
                   
                        name="agreeTerms"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.agreeTerms}
                      />
                      <label for="agreeTerms" class="ps-4">
                        By submitting this form, you agree to user
                        <a
                          class="terms-link action-link"
                          href=""
                        >
                          Privacy Statement
                        </a>
                      </label>
                      {touched.agreeTerms && errors.agreeTerms && (
                        <p style={errorStyle}>{errors.agreeTerms}</p>
                      )}
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="cs-btn-fill">
                      Register
                    </button>
                  </div>
                </form>
              </div>
                        <div class="cs-style-line">
                            <span>Or Continue with</span>
                        </div>
                        <ul class="cs-socials">
                            <li class="cs-google">
                                <a href="/login" title="google"><i class="fab fa-google-plus-g"></i></a>
                            </li>
                            <li class="cs-apple">
                               <a href="/login" title="apple"><i class="fab fa-apple"></i></a>
                            </li>
                            <li class="cs-facebook">
                                <a href="/login" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                            </li>
                        </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
