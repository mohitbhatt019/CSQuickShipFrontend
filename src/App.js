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

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
    // <div className="App">
    //     <Navigation />
    // </div>
  );
}

export default App;
