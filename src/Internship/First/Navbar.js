import React, { useState,useEffect } from 'react'

import { Link } from "react-router-dom";
import './CSS/Navbar.css';


const  Navbar= ()=>{
        const [click, setClick]=useState(false);
        const handleClicker=()=>setClick(!click);
        const closeMobileMenu=()=>setClick(false);
        
        
                return (
                        <div className="bgo">
                        
                        <div className="clk container">
                                <h2 className="logo">Abhishek</h2>
                                <nav>
                                        <ul className={click ? 'nav-links active ' : 'nav-links'} style={{color:"#ffff"}}>
                                                <li><Link to="#">Home</Link></li>
                                                <li><Link to="#">Product</Link></li>
                                                <li><Link to="#">About</Link></li>
                                                <li><Link to="#">Services</Link></li>
                                                <Link to="#" className="cta"><button>Contact</button></Link>
                                        </ul>
                                

                                </nav>
                                 
                                 <div className="menu-icon" onClick={handleClicker}>
                                         <i className={click ? 'fas fa-times ' : 'fas fa-bars'} aria-hidden="true"/>
                                </div>






                        </div>
                        </div>
                )
        }


export default Navbar;