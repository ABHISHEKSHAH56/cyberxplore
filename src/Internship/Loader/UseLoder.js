import React from 'react'
import { useState } from 'react';
import Full from './Full';

export default function UseLoder() {
        const [loading , setloading ] = useState(false);

        return (
                [
                        loading?<Full /> :null,
                        ()=>setloading(true),
                        ()=>setloading(false) //hide
                ]
        )
}
