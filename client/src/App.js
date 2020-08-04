import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import Routes from './components/routes/Routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
           <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
           </Switch>
           <Footer />
        </Fragment>
      </Router> 
    </div>
  );
}

export default App;
