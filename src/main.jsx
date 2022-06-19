import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import PlainCssPriority from "./PlainCssPriority";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <PlainCssPriority>
              <ThemeProvider theme={theme}>
                  <BrowserRouter>
                      <CssBaseline />
                      <App />
                  </BrowserRouter>
              </ThemeProvider>
          </PlainCssPriority>
      </Provider>
  </React.StrictMode>
)
