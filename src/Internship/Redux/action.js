import axios from 'axios';
const url = 'https://subbuster.cyberxplore.com/api/find?domain=';


//
export const  getdomain =(domain)=>async (dispatch)=>{
        console.log(`${url}${domain}`)
        try {
                const {data}=await axios.get(`${url}${domain}`);
                console.log(data);
     
                dispatch({
                        type:'FETCH_ALL',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}