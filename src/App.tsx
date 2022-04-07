import React from 'react';
import './App.css';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDayjs';
import Table from './components/Table'


function App() {

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Table />
    </LocalizationProvider>
  );
}

export default App;
