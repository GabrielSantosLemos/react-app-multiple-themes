import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Admin from './pages/Admin'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
    </BrowserRouter>
);

export default Routes