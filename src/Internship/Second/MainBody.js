
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { deletedomain, getlastdomain } from '../Redux/action';

import Paginations from './Component/Paginations';
import Search from './Component/Search';
import Tableheader from './Component/Tableheader';
import './sec.css'

export default function MainBody() {
        const history= useHistory();
      
        
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
                { name:"Sub-Domain" ,field:"subdomain"  ,sortable:true },
                { name:"IP-Address" ,field:"ip" ,sortable:true },
                { name:"Status Code" ,field:"statuscode"  ,sortable:true},
                { name:"Last Update" ,field:"updatedon"  ,sortable:true },

        ]
        const dispatch = useDispatch();
        const PageHandle =()=>{
                dispatch(deletedomain());
                history.push("/first");
                

        }
       
        
        const post = useSelector(state => state.data.archived)
        const ram=post[0].data;
        const prevhandeler=()=>{
                dispatch(getlastdomain());

        }
        useEffect(() => {
                
                setgetdomaindata(ram)
                
        }, [ram,prevhandeler])
        
        
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
                        revsered * a[sorting.field].localeCompare(b[sorting.field]));
                }
                if(commputecomments.length>0){  settotalitems(commputecomments.length)}
                return commputecomments.slice(
                        (currentpage-1)* ITEMs_PER_PAGE,
                        (currentpage-1) *ITEMs_PER_PAGE +ITEMs_PER_PAGE
                );
        } ,[getdomaindata,currentpage,search,sorting]);
        return (
                
                <div className="container" style={{marginTop:"45px", minHeight:'70vh'}}>
                        
                <div className="sec-header" >
                        <h1 >Bust Domain </h1>
                </div>
                <div className="container">
                        <div className="row">
                        <div className=" col-lg-12 col-md-12 col-sm-12  text-center">
                                <div className="row">
                                        <div className="col-md-6 col-sm-6 ">
                                        <Button style={{background:"blue"}} onClick={prevhandeler} >
                                                <Button.Content visible>Previvous result</Button.Content>
                                               
                                        </Button>
                                        <Button style={{background:"green"}} onClick={PageHandle} >
                                                <Button.Content visible>Search Again</Button.Content>
                                                
                                        </Button>
                                        
                                        
                                                
                                                
                                        </div>
                                        <div className="col-md-6  col-sm-6 sec-search d-flex   flex-row justify-content-end">
                                                <p >Search</p>
                                                <Search onSearch={(value)=>{
                                                        setsearch(value)
                                                        setcurrentpage(1)
                                                        

                                                }}   />
                                        </div>
                                        <hr/>
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
                                                        <th>{data.subdomain}</th>
                                                        <td>{data.ip}</td>
                                                        <td>{data.statuscode}</td>
                                                        <td>{data.updatedon}</td>
                                                     
                                                        </tr>

                                                       ))
                                               } 
                                        </tbody>

                                </table>
                               
                                <div className="row">
                                <hr/>
                                        <div className="col-md-6 ">
                                       
                                                
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
                    
                </div>
        )
}
