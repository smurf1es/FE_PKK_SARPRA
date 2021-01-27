import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Route exact path='/' component={HomeScreen} />
      </main>
    </BrowserRouter>
  );
};

export default App;
