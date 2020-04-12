import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter} from 'react-router-dom'
import AppNavbar from '../src/components/AppNavbar';

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <AppNavbar/> 
      </BrowserRouter>
    
  );
}

export default App;
