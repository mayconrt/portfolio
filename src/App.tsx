import React, { Fragment } from 'react';

import Header from './pages/Header'
import Home from './pages/Home'
import Slkills from './pages/Skills'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './pages/Footer'

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Slkills />
      <About />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
