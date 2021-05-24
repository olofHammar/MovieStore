import { combineReducers } from "redux";
import userReducer from '../features/userSlice';
import titleReducer from '../features/titleSlice';


const rootReducer = combineReducers({
      user: userReducer,
      title: titleReducer
})


export { rootReducer};