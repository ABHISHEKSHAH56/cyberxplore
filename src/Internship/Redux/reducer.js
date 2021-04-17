const inital={
        college:[
                
        ],
        archived:[]
}


export default (state=inital,action)=>{
        switch (action.type) {
                case 'FETCH_ALL':                        
                        return {
                                ...state,
                                college:[...state.college,action.payload],
                                archived:[action.payload]

                        }
                case 'DELETE_ALL':                        
                        return {
                                ...state,
                                archived:[]                                

                        }        
                        
                case 'GET_LAST':
                        return {
                                ...state,
                                archived:[state.college.slice(-2).shift()]
                        }      
                                                         
        
                default:
                        return state;
        }
 }

 

