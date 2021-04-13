import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
        return (
                <div className="footer ">

                <Container className="d-flex fl flex-row  justify-content-start">
                        <div className="sec-1">
                                <h2>About Us</h2>
                                <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Consequatur at fuga placeat eum neque qui nemo inventore
                                          saepe culpa totam maiores, hic pariatur id sint?
                                </p>
                                
                        </div>
                        <div className="sec-1">
                                <h2>Services</h2>
                                <ul>
                                



                                        <li>X-Product</li>
                                        <li>E-CyberXplore</li>
                                        <li>CX-Blog</li>
                                        <li>FreeLancing Services</li>
                                </ul>
                        </div>
                        <div className="sec-1">
                                <h2>Contact us </h2>
                                <div className="sec-2 d-flex flex-column align-items-flex-start ">
                                <p>Adress : Punjabi Colony Bilaspur <br /> Rampur UP 244921</p>

                                

                                       
                                        <p>
                                       
                                        Email : support@cyberxplore.com
                                      </p>

                                </div>
                              

                        </div>
                </Container>

                </div>
        )
}
