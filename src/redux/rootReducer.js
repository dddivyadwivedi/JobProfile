import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import CandidateReducer from "./CandidateRedux/Candidate.reducer";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key : 'root', 
    storage , 
    whitelist :['candidate']
}
const rootReducer = combineReducers({
    candidate : CandidateReducer
})
export default persistReducer(persistConfig , rootReducer)