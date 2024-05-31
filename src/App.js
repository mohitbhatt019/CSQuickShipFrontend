import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/authContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { HideSideBarProvider } from "./context/hideSideBarContext";
import { ModalTypeContextProvider } from "./context/modalTypeContext";
import { SelectorTypeContext, SelectorTypeContextProvider } from './context/selectorTypeContext';
import { OidcProvider, useOidc, useOidcAccessToken, useOidcUser } from "@axa-fr/react-oidc";
import axios from 'axios';

function App() {
  const queryClient = new QueryClient();
  const configuration = {
    client_id: '2',
    client_secret: "123456789",
    redirect_uri: window.location.origin + '/authentication/callback',
    silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
    scope: 'jwtapitestapp.read openid profile phone',
    authority: 'https://localhost:56255'
  };





  return (
    <QueryClientProvider client={queryClient}>
          <OidcProvider configuration={configuration} >

    <AuthProvider>
      <HideSideBarProvider>
        <ModalTypeContextProvider>
          <SelectorTypeContextProvider>
            <Navigation />
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </SelectorTypeContextProvider>
        </ModalTypeContextProvider>
      </HideSideBarProvider>
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </OidcProvider>

  </QueryClientProvider>
    // <div className="App">
    //     <Navigation />
    // </div>
  );
}

export default App;
