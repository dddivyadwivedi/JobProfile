import { CandidateActionType } from "./Candidate.types";

const INITIAL_STATE = {
    data : [],
    searchField : ''
}
const CandidateReducer = (state=INITIAL_STATE , action)=>{
    switch(action.type){
        case CandidateActionType.FETCH_API:
            return{
                data : action.payload,
                searchField : ''
            }
        case CandidateActionType.ADD_SEARCH:
            return{
                ...state , 
                searchField : action.payload
            }
        case CandidateActionType.SHORTLIST:
           const newState = state.data.map(data=>{
               if(data.id.toString()=== action.payload){
                   data.status = 'Shortlisted'
               }
               return data
           })
           console.log(newState)
           return {
               ...state , 
               data : newState
           }
           case CandidateActionType.REJECTED:
               const newState2 = state.data.map(data=>{
                   if(data.id.toString()=== action.payload){
                      data.status = 'Rejected'
                   }
                   return data
               })
               return {
                   ...state , 
                   data : newState2
               }
               default : return state
    }
}

export default CandidateReducer