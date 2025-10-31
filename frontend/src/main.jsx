import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signUp/Signup'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'

import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/signUp" element={ <Signup/>}/>
        <Route path="/about" element={ <AboutPage/>}/>
        <Route path="/products" element={ <ProductPage/>}/>
        <Route path="/pricing" element={ <PricingPage/>}/>
        <Route path="/support" element={ <SupportPage/>}/>
      </Routes>
    <Footer/>
  </BrowserRouter>
      

)
