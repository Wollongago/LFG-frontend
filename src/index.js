import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';

import { BrowserRouter as Router} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "../src/utils/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
