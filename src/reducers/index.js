import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import question from './question';

export default combineReducers({
    authedUser,
    question,
    loadingBar: loadingBarReducer
})