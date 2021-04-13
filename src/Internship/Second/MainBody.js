import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import UseLoder from '../Loader/UseLoder';
import Paginations from './Component/Paginations';
import Search from './Component/Search';
import Tableheader from './Component/Tableheader';

export default function MainBody() {
        
        const [getdomaindata, setgetdomaindata] = useState([]);
        const [totalitems, settotalitems] = useState(0);
       const [currentpage, setcurrentpage] = useState(1);
       const ITEMs_PER_PAGE=15;
       const [search, setsearch] = useState('');
       const [sorting, setsorting] = useState({
               field:'',
               order:''
       });
       const headers=[
                { name:"#" ,field:"id"  ,sortable:false },
                { name:"Sub-Domain" ,field:"Sub-Domain"  ,sortable:true },
                { name:"IP-Address" ,field:"IP-Address" ,sortable:true },
                { name:"Status Code" ,field:"Status Code"  ,sortable:true },
                { name:"Last Update" ,field:"Last Update"  ,sortable:true },

        ]
        
       
        
        const {post} = useSelector(state => state.data.college)
        useEffect(() => {
                
                setgetdomaindata(getdomaindata)
        }, [post])
        
        console.log(getdomaindata)
        const commentdata=useMemo(() =>{
                let commputecomments =getdomaindata;
                if(search)
                {
                        commputecomments=commputecomments.filter(
                                comment=>
                                comment.subdomain.includes(search)||
                                comment.ip.includes(search)|| comment.statuscode.includes(search)
                        );
                }
                //
               



                if(sorting.field)
                {
                        const revsered= sorting.order ==="asc"? 1:-1;
                        commputecomments=commputecomments.sort((a,b)=>
                        revsered* a[sorting.field].localeCompare(b[sorting.field]));
                }
                settotalitems(commputecomments.length);
                return commputecomments.slice(
                        (currentpage-1)* ITEMs_PER_PAGE,
                        (currentpage-1) *ITEMs_PER_PAGE +ITEMs_PER_PAGE
                );
        } ,[getdomaindata,currentpage,search,sorting]);
        return (
                
                <div className="container" style={{marginTop:"45px", minHeight:'70vh'}}>
                        
                <div className="header" style={{marginBottom:"30px" , fontWeight:"bold"}}>
                        <h1 className="text-center">Bust Domain </h1>
                </div>
                <div className="  row w-90">
                        <div className="col mb-3 col-12 text-center">
                                <div className="row">
                                        <div className="col-md-6">
                                                
                                        </div>
                                        <div className="col-md-6 d-flex   flex-row justify-content-center">
                                                <p style={{marginLeft:'3px !important '}}>Search</p>
                                                <Search onSearch={(value)=>{
                                                        setsearch(value)
                                                        setcurrentpage(1)
                                                        

                                                }}   />
                                        </div>
                                </div>


                                <table className="table table-striped">
                                        <Tableheader heads={headers} onSorting={(field,order)=>{
                                                setsorting({field,order})
                                        }}/>
                                        <tbody>
                                        

                                               {
                                                       commentdata.map((data,index)=>(
                                                        <tr>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{data.subdomain}</td>
                                                        <td>{data.ip}</td>
                                                        <td>{data.statuscode}</td>
                                                        <td>{data.updatedon}</td>
                                                     
                                                        </tr>

                                                       ))
                                               } 
                                        </tbody>

                                </table>
                                <div className="row">
                                        <div className="col-md-6">
                                                
                                        </div>
                                        <div className="col-md-6 d-flex flex-row-reverse">
                                        <Paginations
                                                total={totalitems} 
                                                itemsperpage={ITEMs_PER_PAGE}
                                                currentpage={currentpage}
                                                onPageChange={page=>setcurrentpage(page)}/>
                                        </div>
                                </div>

                        </div>
                </div>
                    
                </div>
        )
}
