import { combineReducers } from "redux";
import userReducer from '../features/userSlice';
import myListReducer from '../features/myListSlice';


const rootReducer = combineReducers({
      user: userReducer,
      myList: myListReducer
})


export { rootReducer };