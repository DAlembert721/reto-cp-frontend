import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import PlainCssPriority from "./PlainCssPriority";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PlainCssPriority>
                  <App />
              </PlainCssPriority>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
)
