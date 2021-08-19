// Modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';

// Components
import Navbar from './components/Navbar/Navbar';
import Whoami from './pages/Whoami/Whoami';
import Buyme from './pages/Buyme/Buyme';
import Testimonials from './pages/Testimonials/Testimonials';
import Gallery from './pages/Gallery/Gallery';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/whoami" component={Whoami} />
          <Route path="/buyme" component={Buyme} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
