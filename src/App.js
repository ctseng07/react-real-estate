import React from 'react';

import { Header } from './container';
import { About } from './container';
import { Contact } from './container';
import { Features } from './container';
import { Features2 } from './container';
import { Partners } from './container';

import './App.css';
import MainLayout from './layout/MainLayout';

const App = () => {
    return (
        <>
            <MainLayout>
                <Header />
                <About />
                <Features />
                <Features2 />
                <Partners />
                <Contact />
            </MainLayout>
        </>
    )
};

export default App;
