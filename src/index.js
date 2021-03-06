import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { EmployeeDetail, EmployeeList } from './pages';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
