import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import AppBarNav from './components/AppBarNav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route>
          <>
            <CssBaseline />
            <Container maxWidth="lg">
              <AppBarNav />
              <main>
                <section id="home">
                  <Home />
                </section>
                <section id="about" style={{paddingTop: '40px'}}>
                  <About />
                </section>
                <section id="portfolio" style={{paddingTop: '40px'}}>
                  <Portfolio />
                </section>
                <section id="contact" style={{paddingTop: '40px', paddingBottom:'40px'}}>
                  <Contact />
                </section>
              </main>
            </Container>
          </>
        </Route>
      </Switch>
    </Router>
  );
}
