import React from 'react'
import {Route,BrowserRouter,Switch} from "react-router-dom"
import Footer from './component/common/Footer'
import Navbar from './component/common/Navbar'
import Home from './component/Pages/Home'
import About from "./component/Pages/About"
import Contact from "./component/Pages/Contact"
import Brand from "./component/Pages/Brand"
import Product from "./component/Pages/Product"
import "./App.css"
import Steps from './component/Pages/Steps'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/brand" component={Brand}/>
    <Route path="/product" component={Product}/>
    <Route path="/steps" component={Steps}/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
