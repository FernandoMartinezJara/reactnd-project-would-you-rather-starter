import { SET_QUESTION_FILTER } from "../actions/questionFilter";

export default function question(state = '', action){
    switch (action.type) {
        case SET_QUESTION_FILTER:
            return action.filter
        default:
            return state;
    }
}