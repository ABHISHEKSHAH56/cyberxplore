import React from 'react'
import { useState } from 'react';

export default function Search({onSearch}) {
        const [search, setsearch] = useState('');
        const onInputChange=(val)=>{
                setsearch(val);
                onSearch(val);
        }
        return (
                
                <input type="text"
                className="form-control"
                style={{width:"200px",height:'40px'}}
                value={search}
                onChange={(e)=>{
                        onInputChange(e.target.value)
                }}/>
        )
}
