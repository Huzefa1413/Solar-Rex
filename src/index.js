import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { AppContextProvider } from './ContextAPI/AppContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
