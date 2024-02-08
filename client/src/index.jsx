import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import { RegisterContextProvider } from './context/RegisterContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterContextProvider>
      <AuthContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </AuthContextProvider>
    </RegisterContextProvider>
  </React.StrictMode>,
)
