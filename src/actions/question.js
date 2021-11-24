import { _saveQuestion } from '../utils/_DATA';

export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";

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

export function handleAddQuestion(optionOneText, optionTwoText, author='tylermcginnis'){
    return(dispatch) => {
        const question = {
            optionOneText,
            optionTwoText,
            author
        };

        console.log(question)

        return _saveQuestion(question)
            .then((q) => dispatch(addQuestion(q)))
    }
}