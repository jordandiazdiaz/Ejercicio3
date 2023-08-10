import React from 'react';
import Sidebar from './Sidebar';
import Empleados from './Empleados';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Empleados />
    </div>
  );
}

export default App;
