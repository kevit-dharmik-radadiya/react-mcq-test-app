import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./data/theme";
import { Provider } from "react-redux";
import { persistStoreData, store } from "./store/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStoreData}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
