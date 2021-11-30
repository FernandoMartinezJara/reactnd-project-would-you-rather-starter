import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export function saveQuestionAnswer({authedUser, qid, answer}){
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}
export function handleAddQuestion(optionOneText, optionTwoText, author){
    return(dispatch) => {

        dispatch(showLoading());

        const question = {
            optionOneText,
            optionTwoText,
            author
        };

        return _saveQuestion(question)
            .then((q) => dispatch(addQuestion(q)))
            .then(() => dispatch(hideLoading()))
    }
}


export function handleSaveQuestionAnswer(authedUser, qid, answer){
    return (dispatch) => {
        return _saveQuestionAnswer({authedUser, qid, answer})
            .then((q) => dispatch(saveQuestionAnswer({ authedUser, qid, answer })))
        
    }

}