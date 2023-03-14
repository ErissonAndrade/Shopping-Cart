import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import CartContextProvider from './CartContext';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CartContextProvider>
      <React.StrictMode>
        <RouteSwitch />
      </React.StrictMode>
    </CartContextProvider>
  </ThemeProvider>
);

