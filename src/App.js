// Modules
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';

// Components
import Navbar from './components/Navbar/Navbar';
import Whoami from './pages/Whoami/Whoami';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import Testimonials from './pages/Testimonials/Testimonials';
import Gallery from './pages/Gallery/Gallery';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container">
          <Route path='/' render={() => <Redirect to={process.env.PUBLIC_URL + '/'} />} exact />
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
          <Route path={process.env.PUBLIC_URL + '/whoami'} component={Whoami} />
          <Route path={process.env.PUBLIC_URL + '/features'} component={Features} />
          <Route path={process.env.PUBLIC_URL + '/pricing'} component={Pricing} />
          <Route path={process.env.PUBLIC_URL + '/testimonials'} component={Testimonials} />
          <Route path={process.env.PUBLIC_URL + '/gallery'} component={Gallery} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
