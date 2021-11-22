import { CandidateActionType } from "./Candidate.types";

export const fetchApi = (data) =>({
    type: CandidateActionType.FETCH_API,
    payload: data
})
export const addSeachField = (searchField)=>({
    type: CandidateActionType.ADD_SEARCH,
    payload:searchField
})
export const changeStatusToShortlisted = (candidateid)=>({
    type: CandidateActionType.SHORTLIST,
    payload:candidateid
})
export const changeStatusToRejected = (candidateid)=>({
    type: CandidateActionType.REJECTED,
    payload:candidateid
})
