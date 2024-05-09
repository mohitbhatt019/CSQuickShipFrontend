import React, { useState } from 'react'
 import {useNavigate} from "react-router-dom"
 import ImagesUrl from "../constants/images";
function ForgetPassword() {
    const [forgetpassword,setForgetPassword]=useState();
    const [sendOtp,setSendOtp]=useState(false);
    const nav =useNavigate();
    const handlePassword = (e) => {
        setForgetPassword(e.target.value);
      };

 const sendOTP= ()=>{
 setSendOtp(true)
 // nav('/login') //give the route of enter otp here
      }
  return (
    <div>
<section class="cs-template-animation cs_login loaded" style={{ backgroundImage: ImagesUrl.loginimg }}>
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
                        <div class="cs-transformX-L-50 cs-transition-delay-5">
                         {
                            sendOtp && sendOtp?<>  
                              <div class="cs-middle-content">
                         <h1 class="cs-main-title">Validate OTP</h1>
                                <div class="cs-switcher-description1">Please enter the OTP (one time password) to verify
                                    your account. A Code has been sent to +2*******337</div>
                            </div>  
                       </>
                        :
                        <>    
                          <div class="cs-middle-content">
                         <h1 class="cs-main-title">Reset Password</h1>
                                <div class="cs-switcher-description1">Enter your email or phone number (without extension) to receive OTP for password reset</div>
                            </div>        
                        </>
                         }
              
                        </div>
             
        
                {
                   sendOtp && sendOtp?<>
                         <div class="cs-form">
                            <form method="POST" id="otp-form">
                                <label for="reset" class="cs-label">Enter OTP Code Here</label>
                                <div class="cs-otp-row">
                                    <input type="text" class="cs-otp-col otp-input form-control" maxlength="1"
                                        required="required"/>
                                    <input type="text" class="cs-otp-col otp-input form-control" maxlength="1"
                                        required="required"/>
                                    <input type="text" class="cs-otp-col otp-input form-control" maxlength="1"
                                        required="required"/>
                                    <input type="text" class="cs-otp-col otp-input form-control" maxlength="1"
                                        required="required"/>
                                </div>
                                <div class="cs-otp-btn">
                                    <button type="submit" class="cs-btn-fill">Verify</button>
                                </div>
                            </form>
                            <div class="cs-switcher-description3">Not received your code?<a href="/forget"
                                    class="cs-switcher-text action-link ms-1">Resend code</a></div>
                        </div>
                  
             
</>:<>
                        <div class="cs-form">
                            <form method="POST">
                                <div class="form-group">
                                    <label for="email" class="cs-label">Email or Mobile Number</label>
                                    <input type="email" id="email" onChange={handlePassword} value={forgetpassword} class="form-control" name="email" placeholder="Enter Email or Mobile Number" required="required"/>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="cs-btn-fill" onClick={sendOTP}>Send OTP</button>
                                </div>
                            </form>
                            <div class="cs-switcher-description3">Return to?<a href="/login" class="cs-switcher-text action-link ms-1">Sign In</a></div>
                        </div>
               
             
                </>
                }

            </div>
        </div>
        </div>
                </div>
    </section>
    </div>
  )
}

export default ForgetPassword