import React from 'react'
import { useState } from 'react';

export default function Tableheader({heads,onSorting}) {
        const [sortingfield, setsortingfield] = useState("")
        const [sortingOrder, setsortingOrder] = useState("asc");
        const onSortingChange =field=>{
                const order=field==sortingfield && sortingOrder === "asc" ? "desc" :"asc";
                setsortingfield(field); 
                setsortingOrder(order);
                onSorting(field,order);
        }
        return (
                <thead>
                        <tr>
                                {
                                        heads.map((nami)=>(
                                                <th key={nami.name}
                                                onClick={()=>nami.sortable? onSortingChange(nami.field):null}
                                                
                                                >{nami.name}
                                                {
                                                        sortingfield && sortingfield === nami.field &&(
                                                            sortingOrder==="asc" ?<i  className="fa fa-arrow-down"></i>   : <i  className="fa fa-arrow-up"></i>
                                                        )
}
</th>

                                        ))
                                }
                        </tr>
                </thead>
        )
}
