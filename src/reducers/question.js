import { ADD_QUESTION, GET_QUESTIONS } from "../actions/question";

export default function question(state = {}, action){
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        case GET_QUESTIONS:
            
            return {
                ...state,
                ...action.questions
            };
            
        default:
            return state;
    }
}