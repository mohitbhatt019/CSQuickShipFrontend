import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { RoutePath } from '../routes/RoutePath';
import { useOidc, useOidcUser } from '@axa-fr/react-oidc';
import axios from 'axios';

function NavBar() {
  const { logout2 } = useContext(AuthContext);
  const nav = useNavigate();
  const { login, logout, renewTokens, isAuthenticated } = useOidc();
  const { oidcUser, oidcUserLoadingState } = useOidcUser();

  useEffect(()=>{
    if(isAuthenticated){
      const oidcData = sessionStorage.getItem('oidc.default');
   
      if (oidcData) {
        // Step 2: Parse the JSON string to an object
        const parsedData = JSON.parse(oidcData);
        
        // Step 3: Extract the accessToken
        const accessToken = parsedData.tokens.accessToken;
        
        // Step 4: Set the accessToken in local storage
        localStorage.setItem('accessToken', accessToken);
      }
    }
    else{
      localStorage.setItem('accessToken', null);

    }

  },[isAuthenticated])



  useEffect(()=>{
    if(!isAuthenticated){
      login('/')
    }

  },[])

  const clearLocalStorage=async()=>{
        localStorage.setItem('accessToken', null);
        var data = await axios.delete("https://localhost:56255/Home/Logout")
  }
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

  <div >
        

  {!isAuthenticated ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => login()}
        >
          Login
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            clearLocalStorage();
            logout('/login');
          }}
        >
          Logout
        </button>
      )}

            

    </div>
</nav>
    </div>
  )
}

export default NavBar