const inital={
        college:[
                
        ]
}


export default (state=inital,action)=>{
        switch (action.type) {
                case 'FETCH_ALL':                        
                        return {
                                ...state,
                                college:[...state.college,action.payload]

                        }
                case 'DELETE_ALL':                        
                        return {
                                ...state,
                                college:[]

                        }        
                        
                       
                                                         
        
                default:
                        return state;
        }
 }

 

