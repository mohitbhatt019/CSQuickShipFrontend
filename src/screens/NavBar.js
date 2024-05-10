import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../routes/RoutePath';
import { useOidc, useOidcUser } from '@axa-fr/react-oidc';

function NavBar() {

  const { logout2 } = useContext(AuthContext);
  const nav = useNavigate();
  const { login, logout, renewTokens, isAuthenticated } = useOidc();
  const { oidcUser, oidcUserLoadingState } = useOidcUser();

  // useEffect(() => {
  //   debugger
  //   // Reload the page only if isAuthenticated changed from false to true
  //   if (isAuthenticated && oidcUserLoadingState!=null) {
  //     window.location.reload();
  //   }
  // }, [isAuthenticated, oidcUserLoadingState]);


  return (
    <div>
 <nav class="navbar navbar-expand-lg" style={{backgroundColor:"grey"}}>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/services">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Wallet</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Track a Package</a>
      </li>
    </ul>
  </div>

  <div className='offset-7'>
        

  {!isAuthenticated ? <button
            type="button"
            className="btn btn-primary"
            onClick={() => login()}

            >
              Login
            </button> :             <button
            type="button"
            className="btn btn-primary"
            onClick={() => logout()
              
            }

            >
              Logout
            </button>} 

            
          {/* <button className='btn btn-primary' onClick={() => {
                                  logout();
                                  nav(RoutePath.LOGIN.path);
                                }}
                                > Logout</button> */}
    </div>
</nav>
    </div>
  )
}

export default NavBar