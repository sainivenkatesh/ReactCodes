import React from 'react';
import ReactDOM from 'react-dom/client';


// import Bootstrap 
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Routings from './components/Routings';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routings />
  </React.StrictMode>
);

