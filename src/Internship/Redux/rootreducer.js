import { combineReducers } from "redux";
import post from "./reducer.js";
const rootReducers=combineReducers({
        data:post
});
export default rootReducers;