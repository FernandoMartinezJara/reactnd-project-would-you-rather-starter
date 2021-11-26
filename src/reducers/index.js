import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import question from './question';
import questionFilter from './questionFilter';
import users from './users';

export default combineReducers({
    users,
    authedUser,
    question,
    questionFilter,
    loadingBar: loadingBarReducer
})