const inital={
        college:[]
}


export default (state=inital,action)=>{
        switch (action.type) {
                case 'FETCH_ALL':                        
                        return {
                                ...state,
                                college:[...state.college,action.payload]

                        }
                        
                       
                                                         
        
                default:
                        return state;
        }
 }

 

