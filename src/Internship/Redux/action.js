import axios from 'axios';
const url = 'https://subbuster.cyberxplore.com/api/find?domain=';


//
export const  getdomain =(domain)=>async (dispatch)=>{
      
        try {
                const {data}=await axios.get(`${url}${domain}`);
                
     
                dispatch({
                        type:'FETCH_ALL',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}

export const  deletedomain =()=>async (dispatch)=>{
        
        try {
                
     
                dispatch({
                        type:'DELETE_ALL',
                        
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getlastdomain =()=>async (dispatch)=>{
        
        try {
                
     
                dispatch({
                        type:'GET_LAST',
                        
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}