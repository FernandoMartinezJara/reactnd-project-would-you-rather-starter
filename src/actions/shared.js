import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitData } from "../utils/api";
import { getAuthedUsers } from "./users";
import { getQuestions } from "./question";

 export function handleInitData() {
     return(dispatch) => {
         dispatch(showLoading())

         return getInitData()
            .then(({ users, questions }) => {
                    dispatch(getAuthedUsers(users));
                    dispatch(getQuestions(questions));
                    dispatch(hideLoading());
                });
     }
 }