// Modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          <Route path="/" component={Home} exact />
          <Route path="/whoami" component={Whoami} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
