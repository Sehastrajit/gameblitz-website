import React from 'react';
import ReactDOM from 'react-dom/client';
import GameBlitz from './GameBlitz'; // Make sure this path is correct
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameBlitz />
  </React.StrictMode>
);
