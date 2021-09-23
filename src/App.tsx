import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardLayout from './Components/Layout';
import AppRouter from './Router';

function App() {
  return (
    <DashboardLayout>
      <AppRouter/>
    </DashboardLayout>
  );
}

export default App;
