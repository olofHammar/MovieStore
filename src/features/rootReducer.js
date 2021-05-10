import { combineReducers } from "redux";
import { reducer as profileReducer } from './profile';

const rootReducer = combineReducers({
   profile : profileReducer
})


export { rootReducer};