// Modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';

// Components
import Navbar from './components/Navbar/Navbar';

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component="" exact />
        <Route path="/" component="" exact />
        <Route path="/" component="" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
