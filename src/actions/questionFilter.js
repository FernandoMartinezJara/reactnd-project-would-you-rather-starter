export const SET_QUESTION_FILTER = "SET_QUESTION_FILTER";

export function setQuestionFilter(filter){
    return {
        type: SET_QUESTION_FILTER,
        filter
    }
}

export function handleSetQuestionFilter(filter){
    return(dispatch) => {
        return dispatch(setQuestionFilter(filter))
    }
}