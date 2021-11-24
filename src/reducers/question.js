import { ADD_QUESTION, GET_QUESTIONS } from "../actions/question";

export default function question(state = {}, action){
    switch (action.type) {
        case ADD_QUESTION:
            console.log("ADD_QUESTION", action)
            return {
                ...state,
                ...action.question
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