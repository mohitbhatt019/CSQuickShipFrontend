/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { initialSchema, initialValues } from "../../../validations";
import ImagesUrl from "../../../constants/images";
import usePost from "../../../hooks/usePost";
import ENDPOINTS from "../../../services/endPoints";
import QUERY_KEYS from "../../../services/queryKeys";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/authContext";
import { useTransition } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes/RoutePath";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useOidc, useOidcAccessToken, useOidcUser } from "@axa-fr/react-oidc";
import axios from "axios";

export default function LoginScreen({ setUserState, username }) {

  const { loginAuthContext } = useContext(AuthContext);
  const { t } = useTransition();
  const nav = useNavigate();
 const {
    mutateAsync: adminLoginMutateAsync,
    isLoading: isLoadingAdminLogin,
    error: errorAdminLogin,
  } = usePost(ENDPOINTS.LOGIN, QUERY_KEYS.ADMIN_LOGIN_QUERY_KEY);
  
  const [PasswordHide, setPasswordHide] = useState(true);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues.login,
    validationSchema: initialSchema.login,
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
     console.log(data,"data")
        try {
          const response = await adminLoginMutateAsync(data);
          if (response) {
            toast.success("User Authenticated Sucessfully");
            loginAuthContext(response);
            resetForm();
            nav(RoutePath.ORDER.path)
           
          }
        } catch (error) {
          toast.error("Authentication Failed! Check your Credentials");
        }
    },
  });


  
  const { login, logout, renewTokens, isAuthenticated } = useOidc();
  const { accessToken, accessTokenPayload } = useOidcAccessToken();
  const { oidcUser, oidcUserLoadingState } = useOidcUser();

  const getLabel = () => {
    axios.post("https://localhost:7192/label/api/getlabel",{},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    );
    console.log(accessTokenPayload);
    console.log(oidcUserLoadingState)
  }

  
//   useEffect(() => {
//     // Reload the page only if isAuthenticated changed and it's not in the initial loading state
//     if (typeof isAuthenticated !== 'undefined' && !oidcUserLoadingState) {
//       loginAuthContext(true);

//         window.location.reload();
//     }
// }, [isAuthenticated, oidcUserLoadingState]);


  // const loginO = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });


  return (
    <>

   

    <section class="cs-template-animation cs_login loaded"
    style={{ backgroundImage: ImagesUrl.loginbg }}
    >
       <div class="cs-shape">
            <div class="cs-transformX-L-50 cs-transition-delay-3 login-shape-img">
                <img src={ImagesUrl.shape1} alt="Shape"/>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="leftBox_layout">
                    <div class="cs-column-wrap justify-content-center">
                        <div class="cs-transformX-L-50 cs-transition-delay-3 login-left-img">
                            <img src={ImagesUrl.login1} />
                        </div>
                    </div>
                </div>
                <div class="rightBox_layout">
                    <div class="cs-column-wrap justify-content-center">
                        <div class="cs-transformX-L-50 cs-transition-delay-3">
                            <a href="/login" class="cs-logo action-link"><img src={ImagesUrl.logopng} alt="Logo" /></a>
                        </div>
                        <div class="cs-transformX-L-50 cs-transition-delay-5">
                            <div class="cs-middle-content">
                                <h1 class="cs-main-title">Sign Into Cs QuickShip</h1>
                                <div class="cs-switcher-description1">If you don't have an account You can<a href="/signup" class="cs-switcher-text action-link ms-2">Sign Up</a></div>
                            </div>
                        </div>
       
                        <div class="cs-form">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      id="email"
                      class="form-control"
                      name="email"
                      placeholder="Enter Email or Mobile Number"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "small",
                          fontWeight: "400",
                          marginTop: "-15px",
                          marginBottom: "10px",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div class="form-group">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="********"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i onClick={() => setPasswordHide(!PasswordHide)}
                      toggle="#password"
                      class="fa fa-fw fa-eye toggle-password field-icon"
                    ></i>
                    
                    {touched.password && errors.password && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "small",
                          fontWeight: "400",
                          marginTop: "-15px",
                          marginBottom: "10px",
                        }}
                      >
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div class="form-group">
                    <div class="cs-switcher-description2 text-right">
                      <a href="/forget" class="cs-switcher-text">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="cs-btn-fill">
                      Sign In 
                    </button>

                    <button>
                    
           {!isAuthenticated ? <button
            type="button"
            className="btn btn-primary"
            onClick={() => login()}

            >
              Login
            </button> :             <button
            type="button"
            className="btn btn-primary"
            onClick={() => logout()}

            >
              Logout
            </button>} 

          
          
            
          
 
                     
          {/* {isAuthenticated && (
            <button
            type="button"
            className="btn btn-primary"
            onClick={() => renewTokens()}
            >
            renewTokens
            </button>
          )} */}
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
                                <a href="/login"  title="Facebook"><i class="fab fa-facebook-f"></i></a>
                            </li>
                        </ul>
                        <div className="offset-4">
                        <GoogleOAuthProvider clientId="271819893089-usetaavr7opic36lm4h0ql1vrramtvdv.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                  console.log(credentialResponse,"GoogleLogin credentialResponse");
                                }}
                                onError={() => {
                                  console.log('Login Failed');
                                }}
                             />
                        </GoogleOAuthProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
