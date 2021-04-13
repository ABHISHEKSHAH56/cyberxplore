import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { Pagination } from 'react-bootstrap'

export default function Paginations({total=0,itemsperpage=10,currentpage=1,onPageChange}) {
        
        const [totalPages, settotalPages] = useState(0)
        useEffect(() => {
                if(total>0 && itemsperpage>0)
                {
                        settotalPages(Math.ceil(total/itemsperpage));
                }
                
                
        }, [total,itemsperpage]);

        const paginationsitems =useMemo(() => {
                const pages=[];
                for(let i=1; i<=totalPages; i++)
                {
                        pages.push(<Pagination.Item key={i} active={i==currentpage} onClick={()=>onPageChange(i)}>{i}</Pagination.Item>)
                }
                return pages;
        }, [totalPages,currentpage]);

        if (totalPages===0) return null;
        return (
                <Pagination>
                        <Pagination.Prev  onClick={()=>onPageChange(currentpage-1)} disabled={currentpage===1}/>
                        {paginationsitems }
                        
                        <Pagination.Next onClick={()=>onPageChange(currentpage+1)} disabled={currentpage===totalPages}/>
                </Pagination>
        )
}
