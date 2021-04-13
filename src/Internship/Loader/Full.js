import React from 'react';
import spinner from '../Loader/1.gif'
import '../../index.css'

export default function Full() {
        return (
               <div className="fp-container">
                       <img src={spinner} alt="loading" className="fp-loader"/>
               </div>
        )
}
