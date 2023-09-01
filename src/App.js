import React from 'react';

import { Header } from './container';
import { About } from './container';
import { Contact } from './container';
import { Features } from './container';
import { Features2 } from './container';
import { Partners } from './container';


import { Navbar } from './components';
import { Footer } from './components';
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Features />
            <Features2 />
            <Partners />
            <Contact />
            <Footer />
        </>
    )
};

export default App;
