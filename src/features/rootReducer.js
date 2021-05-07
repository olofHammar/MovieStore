import { combineReducers } from "redux";
import { reducer as testReducer } from './reduxTest';

const rootReducer = combineReducers({
   reduxTest : testReducer
})


export { rootReducer};