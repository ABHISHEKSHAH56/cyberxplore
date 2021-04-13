import React from 'react'
import soo from '../Error/sorry.gif'

import { useHistory } from "react-router-dom";
export default function ERR() {
        const history= useHistory();
        setTimeout(() => {
                history.push("/first"); 
        }, 2000);
        return (
                <div className="container er1 d-flex flex-column justify-content-center align-items-center">
                        <h1>Nothing found</h1>
                        <img src={soo} alt=""/>
                        <h2> you will be redirected to home page in 2esc.....</h2>
                        
                </div>
        )
}
