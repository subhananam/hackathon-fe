import React from 'react';
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
