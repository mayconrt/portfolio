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
      <header>
        <Header />
      </header>
      <body>
        <main>
          <Home />
          <Slkills />
          <About />
          <Projects />
          <Footer />
        </main>
      </body>
    </Fragment>
  );
}

export default App;
