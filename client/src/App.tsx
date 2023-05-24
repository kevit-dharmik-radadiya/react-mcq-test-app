import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStoreData, store } from './app/store';
import theme from './app/theme';
import router from './routes/Routes';

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
