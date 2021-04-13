import React from 'react'
import { useDispatch } from 'react-redux';
import Footer from './First/Footer.js'
import LandPage from './First/LandPage.js'
import Navbar from './First/Navbar.js'
export default function index() {
        
        return (
                <div>
                       <Navbar /> 
                       <LandPage />
                       <Footer />
                </div>
        )
}
