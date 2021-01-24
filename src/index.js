import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SeatState from './contex/SeatState';

ReactDOM.render(
  <React.StrictMode>
    <SeatState>
      <App />
    </SeatState>
  </React.StrictMode>,
  document.getElementById('root')
);
